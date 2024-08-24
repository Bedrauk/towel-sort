
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let res = [], i = 0;
if (!matrix) {
  return res
}
for (let row of matrix) {
  ++i;
  (i%2 === 0) ? res = res.concat(row.reverse()) : res = res.concat(row)
}
  return res.sort((a,b) => a-b);
}
