module.exports = function reverse (n) {
  return n>0? n.toString().split('').reverse().join('') : (n*-1).toString().split('').reverse().join('');
}
