export const fetcher = async <T> (url: string): Promise<T> => {
  const controller = new AbortController()
  const { signal } = controller
  try {
    const response = await fetch(url, { signal })
    if (signal.aborted) {
      throw new Error('Solicitud cancelada')
    }
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    return response.json()

  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('La solicitud fue cancelada')
      }
    }
    return Promise.reject(error)
  }
}
