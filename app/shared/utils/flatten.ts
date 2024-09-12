function flatten<T>(arr: T[][]) {
  return arr.reduce((acc, cur) => [...acc, ...cur], [])
}

export default flatten
