export default function appendToEachArrayValue(array, appendString) {
  for (const value in array) {
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
