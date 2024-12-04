// app/lib/getData.ts
export async function getNocoDBData() {
  try {
    const response = await fetch(
      'https://app.nocodb.com/api/v2/tables/m1m464k0kjjd8oo/records?offset=0&limit=100&where=&viewId=vwmg3gze48r8fswj',
      {
        headers: {
          'xc-token': 'ORo0g8UdAc8MvTzc6AtAe7ZkUnFG2MvkRrmprNCB'
        },
        // Enable caching
        next: {
          revalidate: 1 // Revalidate every hour
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const result = await response.json()
    return result.list || []
  } catch (error) {
    console.error('Error fetching NocoDB data:', error)
    throw error
  }
}
