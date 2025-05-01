export function findComponentPaddingMultiplier(array_length, key) {
  const isComponentLastInArr = key + 1 === array_length;
  return isComponentLastInArr ? "2" : "1";
}
