/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-08-22 09:29:25
 * @LastEditTime: 2020-03-18 10:56:36
 */
const {
  OpenApiClient
} = require('../src')

async function getOrganizationsByParent () {
  const accessId = 'Hc3DH+TMxCtaVfLLhp0m'
  const secretKey = 'DFd69HKKcmSEmrZWEg7G8pNe2xhfHuyxnYUeeHO22'
  // const baseUrl = 'https://api.mctech.vip'
  const baseUrl = 'https://test.mctech.vip'
  const client = new OpenApiClient(baseUrl, accessId, secretKey)
  // const result = await client.get('/api/mquantity/organizations-parent?parentId=-1')
  const result = await client.get('/api/mquantity/organizations-parent?parentId=-1')
  // const result = await client.get('/mquantity/get-receive-weight-order-list?limit=100&offset=0&version=0')
  return result  
} 
getOrganizationsByParent().then((data)=>{
  console.log(data)
})