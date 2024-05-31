const { StoredSearch } = require('@opoint/storedsearch')

async function main() {
  const api = new StoredSearch({ api_key: process.env.OPOINT_API_KEY })
  const res = await api.list()
  const body = res.data
}

main()
