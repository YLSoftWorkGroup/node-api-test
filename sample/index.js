const { OpenApiClient } = require('../src')

async function getOrganizationsByParent () {
  const accessId = 'RqA7yCICYBtsJazutNSF'
  const secretKey = 'i38rdlXmmWUehDF+o38hGMk7F9WKgUxAUebjYCvKR'
  const baseUrl = 'https://api.mctech.vip'
  const client = new OpenApiClient(baseUrl, accessId, secretKey)
  const result = await client.get('/mquantity/organizations-parent?parentId=-1')
  return result
}
getOrganizationsByParent().then((data)=>{
  console.log(data)
})
