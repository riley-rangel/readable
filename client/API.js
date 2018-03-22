
const headers = { headers: { 'Authorization': 'whatever-you-want' }}

export const getCategories = async () => {
  const res = await fetch('/categories', headers)
  const data = await res.json()
  return data.categories
}
