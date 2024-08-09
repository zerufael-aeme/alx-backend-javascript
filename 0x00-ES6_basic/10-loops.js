export default function appendToEachArrayValue(array, appendString) {
  var newArray = [];
  for (const item of array) {
    newArray.push(appendString + item);
  }

  return newArray;
}
