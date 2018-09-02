const repo = require('./repo');

const getOne = (id) => repo.getOne(id);
const service = {
  getOne
}
const getService = () => service

module.exports = getService();