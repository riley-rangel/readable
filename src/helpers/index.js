
export const capitalize = str => {
  if (typeof str !== 'string') return null

  const [first, ...rest] = str
  return `${first.toUpperCase()}${rest.join('')}`
}
