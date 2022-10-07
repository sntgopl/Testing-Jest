// String function that returns number of characters
const stringCount = (string) => {
  let length = string.length;
  if ( length < 1 || length > 10) {
    return 'Error: string must have more than 1 and less than 10';
  }
  else {
    return length;
  }
}

export default stringCount;