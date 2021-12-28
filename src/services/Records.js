const Record = require("../models/Record");

const list = async (data) => {
  const { startDate, endDate, maxCount, minCount } = data;
  let resp = await Record.aggregate([
    {
      $project: {
        key: 1,
        createdAt: 1,
        _id: 0,
        totalCount: {
          input: "$counts",
          initialValue: 0,
          in: {
            $sum: ["$$value", "$$this"],
          },
        },
      },
    },
    {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lt: new Date(endDate),
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount,
        },
      },
    },
  ]);
  return resp;
};

module.exports = {
  list,
};
