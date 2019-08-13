const {
  OpenApiClient
} = require('../src')

async function getOrganizationsByParent () {
  const accessId = 'HwlkBPd8S39bvZFQzxet'
  const secretKey = 'IbBh1H5EVq8TUy0wib64RcLKepMTsisAp47Ehupl'
  const baseUrl = 'https://api.mctech.vip'
  const client = new OpenApiClient(baseUrl, accessId, secretKey)
  const result = await client.get('/mquantity/organizations-parent?parentId=-1')
  return result
}
getOrganizationsByParent().then((data)=>{
  console.log(data)
})