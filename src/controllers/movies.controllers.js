const catchError = require("../utils/catchError");
const movies = require("../models/Movies");
const actors = require("../models/actors");
const Directors = require("../models/Directors");
const genres = require("../models/genres");

const getAll = catchError(async (req, res) => {
  const results = await movies.findAll({
    include: [actors, Directors, genres],
  });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await movies.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await movies.findByPk(id, {
    include: [actors, Directors, genres],
  });
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await movies.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await movies.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
