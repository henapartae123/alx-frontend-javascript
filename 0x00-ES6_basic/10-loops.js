export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.push(value)] = appendString + value;
  }

  return array;
}
