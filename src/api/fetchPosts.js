const fetchPosts = async (page, limit) => {
    const raw = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    const data = await raw.json()
    return data
}

export { fetchPosts }