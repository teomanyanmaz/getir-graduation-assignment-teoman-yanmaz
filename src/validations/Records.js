const Joi = require("joi");

const getRecords = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().required(),
});

module.exports = {
  getRecords,
};
