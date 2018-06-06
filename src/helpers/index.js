
export const capitalize = str => {
  if (typeof str !== 'string') return null

  const [first, ...rest] = str
  return `${first.toUpperCase()}${rest.join('')}`
}

export const isObject = value => {
  return Object.prototype.toString.call(value) === '[object Object]'
}
