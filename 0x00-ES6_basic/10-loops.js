export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    let value = item
    item = appendString + value;
  }

  return array;
}
