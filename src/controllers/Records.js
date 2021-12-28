const RecordService = require("../services/Records");
const hs = require("http-status");

const showRecords = async (req, res) => {
  RecordService.list(req.body)
    .then((recordList) => {
      if (!recordList)
        res
          .status(hs.INTERNAL_SERVER_ERROR)
          .send({ error: "An error occured" });
      res.status(hs.OK).send({
        code: 0,
        msg: "Success",
        records: recordList,
      });
    })
    .catch((e) => res.status(hs.INTERNAL_SERVER_ERROR).send(e));
};

module.exports = {
  showRecords,
};
