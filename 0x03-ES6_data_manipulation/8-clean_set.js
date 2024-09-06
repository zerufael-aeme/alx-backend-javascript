export default function cleanSet(set, startString) {
  let cleanString = '';

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      cleanString += `${item.slice(startString.length)}-`;
    }
  });

  // Remove the last '-' if it exists
  return cleanString.slice(0, -1);
}
