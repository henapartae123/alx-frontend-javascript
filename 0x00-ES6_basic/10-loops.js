export default function appendToEachArrayValue(array, appendString) {
    // eslint-disable-next-line
  for (const idx in array) {
    // eslint-disable-next-line
    array[array.indexOf(idx)] = appendString + idx;
  }

  return array;
}
