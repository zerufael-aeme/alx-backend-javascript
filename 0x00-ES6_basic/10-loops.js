export default function appendToEachArrayValue(array, appendString) {
  for (const item in array) {
    let value = item
    item = appendString + value;
  }

  return array;
}
