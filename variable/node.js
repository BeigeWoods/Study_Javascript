g1 = 1;
var v1 = 2;
let l1 = 3;
let l2 = 4;
const c1 = g2(l1);
function g2(x) {
  var v1 = x + g1;
  console.log(v1); // 4
  g1 = 5;
  const c2 = (y) => {
    let l1 = 7;
    console.log(l1); // 7
    return l1 + y;
  };
  l2 = 6;
  console.log(l2); // 6
  return c2(l2 - v1);
}
if (g1 > 1) {
  console.log(c1); // 9
  console.log(v1); // 2
  console.log(l1); // 3
  console.log(globalThis.g1); // 5
  console.log(globalThis.v1); // undefined
}
