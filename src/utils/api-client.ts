function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig
  }

  return window
    .fetch(`${import.meta.env.VITE_API_URL}/${endpoint}`, config)
    .then((response) => response.json())
}

export { client }
