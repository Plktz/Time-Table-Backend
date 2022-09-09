const morgan = require("morgan");
const logger = require("../../utils/app-logger")(__filename);
const { default: mongoose } = require("mongoose");
const Model = require("../models/timeTable_schema");
const SubjectModel = require("../models/subject_schema");
const RoomModel = require("../models/room_schema");

let empty = -1;
solveTimeTable = (grid, subjectCurrent, days, periods, rooms, subjects) => {
  const toDayPeriod = (index) => {
    const column = Math.floor(index % periods);
    const row = Math.floor(index / periods);
    return [row, column];
  };

  const nextSubject = (subjectIndex) => {
    logger.debug("nextSubject", subjectIndex);
    // console.log(subjectIndex);

    if (subjects[subjectIndex].occurence === periods) {
      return subjectIndex + 1;
    }
    return subjectIndex;
  };

  const isSafe = (index, room, grid, subjectIndex) => {
    logger.debug("isSafe ", subjectIndex);
    // console.log(subjectIndex);
    let day = toDayPeriod(index)[0];
    let period = toDayPeriod(index)[1];
    grid[day][period].forEach((subValue) => {
      if (subValue != empty) {
        if (subjects[subjectIndex].teacher === subjects[subValue].teacher) {
          return false;
        }
        if (subjects[subjectIndex].class === subjects[subValue].class) {
          return false;
        }
      }
    });
    return true;
  };

	console.log(subjectCurrent, ' ', subjects.length);
  if (subjectCurrent === subjects.length) {
    return true;
  }

  for (let index = 0; index < days * periods; index++) {
    let day = toDayPeriod(index)[0];
    let period = toDayPeriod(index)[1];
    rooms.forEach((room, index) => {
      if (grid[day][period][index] === empty) {
        if (isSafe(index, room, grid, subjectCurrent)) {
          grid[day][period][index] = subjectCurrent;
					// console.log(grid[day][period][index]);
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
            logger.debug("solveTimeTable recursion");
            return true;
          }

          grid[day][period][index] = empty;
        }
      }
    });
  }
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
  },
};
