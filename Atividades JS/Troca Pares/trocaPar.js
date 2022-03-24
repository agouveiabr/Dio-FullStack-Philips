function trocaPar(array) {
  if (!array.length) return -1;

  for (i in array) {
    if (array[i] % 2 === 0) {
      array[i] = 0;
    }
  }

  return array;
}

console.log(trocaPar([]));
