const min = 0;
const max = 10;
const produceArray = Array.apply(null, { length: max + 1 })
  .map(Number.call, Number)
  .slice(min);
console.log(produceArray);

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log(array);
  return array;
}
const ranNums = shuffle(produceArray);

// const numArray = produceArray;
// const winner = numArray[3];
// console.log(winner);
