
const BASE_URL = 'http://localhost:3001'
const headers = { headers: { 'Authorization': 'whatever-you-want' }}

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`, headers)
  const data = await res.json()
  return data.categories
}
