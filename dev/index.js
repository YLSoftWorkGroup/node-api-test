/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-08-22 09:29:25
 * @LastEditTime: 2020-04-10 17:39:35
 */
const {
  OpenApiClient
} = require('../src')

async function getOrganizationsByParent () {
  const accessId = 'tMZNoYy+kLqH/ns8Kddp'
  const secretKey = 'wfcTNiJ8tkVw9oOSz9eVsaJgqmT6YprH0INeQYRK'
  const baseUrl = 'https://api.mctech.vip'
  // const baseUrl = 'http://192.168.1.123'
  const client = new OpenApiClient(baseUrl, accessId, secretKey)
  // const result = await client.get('/api/mquantity/organizations-parent?parentId=-1')
  const result = await client.get('/mquantity/organizations-parent?parentId=-1')
  // const result = await client.get('/mquantity/get-receive-weight-order-list?limit=100&offset=0&version=0')
  return result
}
getOrganizationsByParent().then((data)=>{
  console.log(data)
})