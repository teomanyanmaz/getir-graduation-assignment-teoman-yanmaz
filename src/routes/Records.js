const express = require("express");
const validate = require("../middlewares/validate");
const RecordSchemas = require("../validations/Records");
const Records = require("../controllers/Records");

const router = express.Router();
router.route("/").post(validate(RecordSchemas.getRecords), Records.showRecords);

module.exports = router;
