// Memoized function
function memoizeOne(fn) {
  let map = new Map();
  return function fun(a, b) {
    let value;
    map.forEach((x, y) => {
      if ((a == y[0] && b == y[1]) || (b == y[0] && a == y[1])) {
        value = x;
      }
    });
    if (value) {
      return value;
    }
    value = fn(a, b);
    map.set([a, b], value);

    return value;
  };
}

const add = (a, b) => {
  console.log("add called");
  return a + b;
};
const memoizeAdd = memoizeOne(add);

console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(3, 4));