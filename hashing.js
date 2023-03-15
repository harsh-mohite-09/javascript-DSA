const arr = [2, 3, 2, 3, 5];
const N = 5;
const P = 5;

const frequencyCount = (arr, N, P) => {
  const output = [];
  const myMap = new Map(
    Array(P)
      .fill(0)
      .map((e, i) => [i + 1, e])
  );
  for (let i = 0; i < N; i++) {
    myMap.set(arr[i], myMap.get(arr[i]) + 1);
  }

  for (let i = 1; i <= P; i++) {
    output.push(myMap.get(i) || 0);
  }
  return output;
};

// const frequencyCount = (arr, N, P) => {
//   const obj = {};
//   const output = [];
//   for (let i = 0; i < N; i++) {
//     obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
//   }
//   for (let i = 1; i <= P; i++) {
//     output.push(obj[i] || 0);
//   }
//   return output;
// };

console.log(frequencyCount(arr, N, P));
