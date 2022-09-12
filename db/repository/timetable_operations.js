const morgan = require("morgan");
const logger = require("../../utils/app-logger")(__filename);
const { default: mongoose } = require("mongoose");
const Model = require("../models/timeTable_schema");
const SubjectModel = require("../models/subject_schema");
const RoomModel = require("../models/room_schema");

const empty = -1;

solveTimeTable = (grid, subjectCurrent, days, periods, rooms, subjects) => {
  const nextSubject = (subjectIndex) => {
    if (subjects[subjectIndex].occurence === subjects[subjectIndex].cycle) {
      return subjectIndex + 1;
    }
    return subjectIndex;
  };

  const isSafe = (subjectIndex, day, period, room, grid) => {
    const roomsInDayPeriod = grid[day][period];
    for (let i = 0; i < rooms.length; i++) {
      const subValue = roomsInDayPeriod[i];
      if (subValue != empty) {
        if (
          subjects[subjectIndex].teacher._id == subjects[subValue].teacher._id
        ) {
          return false;
        }
        if (subjects[subjectIndex].class._id == subjects[subValue].class._id) {
          return false;
        }
      }
    }
    if (subjects[subjectIndex].rooms.includes(room._id)) {
      return true;
    }
    return false;
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
              return true;
            }
          }
          grid[i][j][k] = empty;
        }
      }
    }
  }
  return false;
};

module.exports = {
  async create(object) {
    logger.debug("timeTableCreate Called");
    let userid = mongoose.Types.ObjectId(object.userid);
    let subjects = await SubjectModel.find({ userid: userid })
      .populate("class teacher")
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
    const grid = Array(days)
      .fill()
      .map(() =>
        Array(periods)
          .fill()
          .map(() => Array(rooms.length).fill(empty))
      );
    const result = await solveTimeTable(grid, 0, days, periods, rooms, subjects);
    if (result ) {
      const timeTable = {
        grid: grid,
        subjects: subjects.map((subject) => {
          return {
            name: subject.name,
            teacher: subject.teacher.name,
            class: subject.class.name,
          };
        }),
        rooms: rooms.map((room) => room.name),
        days: object.days,
        periods: object.periods
      };
      return timeTable;
    } else {
      return result;
    }
  },
};
