const morgan = require("morgan");
const logger = require("../../utils/app-logger")(__filename);
const { default: mongoose } = require("mongoose");
const Model = require("../models/timeTable_schema");
const SubjectModel = require("../models/subject_schema");
const RoomModel = require("../models/room_schema");

const empty = -1;

// solveTimeTable = (grid, subjectCurrent, days, periods, rooms, subjects) => {
//   const toDayPeriod = (index) => {
//     const column = Math.floor(index % periods);
//     const row = Math.floor(index / periods);
//     return [row, column];
//   };

//   const nextSubject = (subjectIndex) => {
//     logger.debug("nextSubject", subjectIndex);
//     console.log(" occurence ", subjects[subjectIndex].occurence);
//     if (subjects[subjectIndex].occurence === subjects[subjectIndex].cycle) {
//       console.log("subjectIndex ", subjectIndex);
//       return subjectIndex + 1;
//     }
//     return subjectIndex;
//   };

//   const isSafe = (index, room, grid, subjectIndex) => {
//     logger.debug("isSafe ", subjectIndex);
//     // console.log(subjectIndex);
//     // let day = toDayPeriod(index)[0];
//     // let period = toDayPeriod(index)[1];
//     // for (let subValue = 0; subValue < rooms.length; subValue++) {
//     //   if (subValue != -1) {
//     //     if (subjects[subjectIndex].teacher == subjects[subValue].teacher) {
//     //       return false;
//     //     }
//     //     if (subjects[subjectIndex].class == subjects[subValue].class) {
//     //       return false;
//     //     }
//     //   }
//     // }
//     return true;
//   };

//   if (subjectCurrent == subjects.length) {
//     console.log("done");
//     return true;
//   }

//   for (let index = 0; index < days * periods; index++) {
//     let day = toDayPeriod(index)[0];
//     let period = toDayPeriod(index)[1];
//     for (let k = 0; k < rooms.length; k++) {
//       let room = rooms[k];
//       if (grid[day][period][k] === -1) {
//         if (isSafe(k, room, grid, subjectCurrent)) {
//           grid[day][period][k] = subjectCurrent;
//           console.log("isSafe returned true");
//           subjects[subjectCurrent].occurence++;
//           if (
//             solveTimeTable(
//               grid,
//               nextSubject(subjectCurrent),
//               days,
//               periods,
//               rooms,
//               subjects
//             )
//           ) {
//             logger.debug("solveTimeTable recursion");
//             console.log("return true");
//             return true;
//           }

//           grid[day][period][k] = -1;
//         }
//       }
//     }
//   }
//   return false;
// };

solveTimeTable = (grid, subjectCurrent, days, periods, rooms, subjects) => {
  const nextSubject = (subjectIndex) => {
    console.log("nextSubject ", subjectIndex);
    if (subjects[subjectIndex].occurence === subjects[subjectIndex].cycle) {
      return subjectIndex + 1;
    }
    return subjectIndex;
  };

  const isSafe = (subjectIndex, day, period, room, grid) => {
    logger.debug("isSafe ", subjectIndex);
    console.log(subjectIndex);
    const roomsInDayPeriod = grid[day][period];
    for (let i = 0; i < rooms.length; i++) {
      const subValue = roomsInDayPeriod[i];
      if (subValue != empty) {
        if (subjects[subjectIndex].teacher == subjects[subValue].teacher) {
          return false;
        }
        if (subjects[subjectIndex].class == subjects[subValue].class) {
          return false;
        }
      }
    }
    return true;
  };

  if (subjectCurrent === subjects.length) {
    return true;
  }

  for (let i = 0; i < days; i++) {
    for (let j = 0; j < periods; j++) {
      for (let k = 0; k < rooms.length; k++) {
        const room = rooms[k];
        if (grid[i][j][k] === empty) {
          if (isSafe(subjectCurrent, i, j, room, grid)) {
            grid[i][j][k] = subjectCurrent;
            console.log(grid[i][j]);
            subjects[subjectCurrent].occurence++;
            if (
              solveTimeTable(
                grid,
                nextSubject(subjectCurrent),
                days,
                periods,
                rooms,
                subjects
              )
            ) {
              console.log('true');
              return true;
            }
          }
          grid[i][j][k] = empty;
        }
        
      }
    }
  }
  console.log(" false ");
  return false;
};

module.exports = {
  async create(object) {
    let userid = mongoose.Types.ObjectId(object.userid);
    let subjects = await SubjectModel.find({ userid: userid })
      .populate("class")
      .exec();
    let rooms = await RoomModel.find({ userid: userid }).exec();
    let periods = object.periods;
    let days = object.days.length;
    subjects.forEach((subject) => {
      subject.rooms = [];
      subject.occurence = 0;
      subject.done = false;
      rooms.forEach((room) => {
        if (room.capacity >= subject.class.strength) {
          subject.rooms.push(room["_id"]);
        }
      });
    });
    let grid = Array(days)
      .fill()
      .map(() =>
        Array(periods)
          .fill()
          .map(() => Array(rooms.length).fill(empty))
      );
    solveTimeTable(grid, 0, days, periods, rooms, subjects);
    console.log(grid);
  },
};
