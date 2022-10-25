// The Setup: countTimesRan * 100
// {
//   let count = 0;
//   function countTimesRan() {
//     console.log(`countTimesRan has run ${++count} times!`);
//   }

//   for (let i = 0; i < 100; i++) {
//     countTimesRan();
//   }
// }


// {
//   let count = 0;
//   function countTimesRan() {
//     console.log(`countTimesRan has run ${++count} times!`);
//   }

//   for (let i = 0; i < 100; i++) {
//     const probability = Math.random();
//     console.log(probability);
//     if (probability < 0.5) {
//       countTimesRan();
//     }
//     console.log('---');
//   }
// }

{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function maybeRun(probability, thingToRun) {
    if (Math.random() < probability) return thingToRun();
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(0.9, countTimesRan);
  }
}

// function add(a,b) {
//   return a + b;
// }

// maybeRun(0.2, add);
