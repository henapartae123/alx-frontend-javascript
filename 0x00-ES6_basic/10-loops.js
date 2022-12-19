export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    array[array.indexOf(idx)] = appendString + idx;
  }

  return array;
}
