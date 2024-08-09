export default function appendToEachArrayValue(array, appendString) {
  for (const item in array) {
    item = appendString + item;
  }

  return array;
}
