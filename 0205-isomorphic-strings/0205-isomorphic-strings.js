/**
 * param {string} s
 * param {string} t
 * return {boolean}
 */

//input -- 2 strings
//output -- boolean
//edge cases:
// length check
var isIsomorphic = function (s, t) {
  //edge case
  if (s.length !== t.length) return false;

  const sToTMap = {};
  const tToSMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];
    if (!sToTMap[sChar] && !tToSMap[tChar]) {
      sToTMap[sChar] = tChar;
      tToSMap[tChar] = sChar;
    } else if (sToTMap[sChar] !== tChar || tToSMap[tChar] !== sChar) {
      return false;
    }
  }
  return true;
};