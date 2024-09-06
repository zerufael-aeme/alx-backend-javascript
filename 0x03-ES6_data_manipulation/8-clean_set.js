export default function cleanSet(set, startString = '') {
  let cleanString = '';

  if(!startString || typeof startString !== 'string') {
    return '';
  }

  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      cleanString += `${item.slice(startString.length)}-`;
    }
  });

  // Remove the last '-' if it exists
  return cleanString.slice(0, -1);
}
