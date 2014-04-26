var clone = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};
module.exports = clone;