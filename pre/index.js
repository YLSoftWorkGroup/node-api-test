/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-08-22 09:29:25
 * @LastEditTime : 2020-01-16 17:21:29
 */
const {
  OpenApiClient
} = require('../src')

async function getOrganizationsByParent () {
  const accessId = 'hR0D5G+p4LiRSzLuSmnx'
  const secretKey = '0YHqvQ5PWq6afg2oMVdS2Dclnavp5TeTbvWgDgSJ'
  const baseUrl = 'https://api.mctech.vip'
  // const baseUrl = 'http://172.16.1.4'
  const client = new OpenApiClient(baseUrl, accessId, secretKey)
  // const result = await client.get('/api/mquantity/organizations-parent?parentId=-1')
  const result = await client.get('/mquantity/organizations-parent?parentId=-1')
  // const result = await client.get('/mquantity/get-receive-weight-order-list?limit=100&offset=0&version=0')
  return result
}
getOrganizationsByParent().then((data)=>{
  console.log(data)
})