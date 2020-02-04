const cache = {}

export function getZeroArray(size) {
  const array = cache[size]
  return array || (cache[size] = new Array(size).fill(0))
}
