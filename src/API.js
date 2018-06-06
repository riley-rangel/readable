
const BASE_URL = 'http://localhost:3001'
const headers = { 'Authorization': 'whatever-you-want' }

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`, { headers })
  const { categories } = await res.json()

  return categories
}

export const savePost = async (post) => {
  const options = {
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    method: 'POST',
  }
  const res = await fetch(`${BASE_URL}/posts`, options)
  const saved = await res.json()

  return saved
}
