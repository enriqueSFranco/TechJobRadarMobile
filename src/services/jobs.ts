async function fetcher (url: URL) {
  const respose = await fetch(url.pathname)

  if (!respose.ok) {
    const error = {
      err: new Error(''),
      statuCode: respose.status,
      statuText: respose.statusText
    }
    throw error
  }

  const data = await respose.json()

  return data
}

export async function getAllJobs () {
  try {
    const url = new URL('')

    const data = await fetcher(url)
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error: ${error.message}`)
    }
  }
}