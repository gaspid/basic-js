const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members.reduce((matt, Name) => (
    (typeof Name === 'string') ?
      matt + Name.trim().slice(0, 1) :
      matt
  ), "")
    .toUpperCase()
    .split('')
    .sort()
    .join('')
};