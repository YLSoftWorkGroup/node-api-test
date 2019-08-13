const {
  OpenApiClient
} = require('../src')

const accessId = 'Yh56fc7XY8zAmmGlMQ6T'
const secretKey = 'x8BwdxdrOHYIFpP8QZgckh80zw8HewPQdCF0B4xI'
const baseUrl = 'http://192.168.1.23'
const client = new OpenApiClient(baseUrl, accessId, secretKey)

async function getOrganizationsByParent() {
  const result = await client.get('/api/mquantity/organizations-parent?parentId=-1')
}

async function postTest() {
  let params = {
    limit: 10,
    draw: 1,
    offset: 0,
    order: [
      ["id"]
    ],
    condtionItems: [{
        fieldName: "name",
        op: "like",
        fieldValue: "%%"
      },
      {
        fieldName: "orgId",
        op: "eq",
        fieldValue: 463870543327232
      },
      {
        fieldName: "dictType",
        op: "eq",
        fieldValue: "storageLocation"
      }
    ]
  }
  const result = await client.post('/api/mquantity/g-common-data-dictionary-params', {
    body: params,
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
  })
  return result
}

async function putTest() {
  let params = {
    "qSupply": {
      "orgId": 521304467493376,
      "id": 553075778327040,
      "orgName": "19号项目部1号拌合站",
      "orderDate": "2019-08-02",
      "orderCode": "",
      "supplierId": 503501041947648,
      "supplierName": "测试供应商新版",
      "supplierContact": "测试12378",
      "supplierPhone": "123123",
      "receiveContact": "测试",
      "receivePhone": "123",
      "receiveAt": "2019-08-15T00:00:00.000Z",
      "remark": "测试测试备注",
      "isExpired": false,
      "isConfirm": false,
      "isSend": true,
      "isSubmit": true,
      "isRemoved": false,
      "creatorId": 10004,
      "creatorName": "租户管理员",
      "createdAt": "2019-08-02T08:35:51.000Z",
      "modifierId": 10004,
      "modifierName": "租户管理员",
      "updatedAt": "2019-08-12T07:19:19.000Z",
      "version": 557139765974016
    },
    "qSupplyItems": [{
      "orgId": 521304467493376,
      "id": 553075780055040,
      "orderId": 553075778327040,
      "materialId": null,
      "materialCode": null,
      "materialName": "粉煤灰",
      "materialModel": "Ⅱ级",
      "materialUnit": "吨",
      "classId": null,
      "classFullId": null,
      "quantity": 11111.123,
      "actualQuantity": 111,
      "price": 213,
      "taxRate": null,
      "manufacturer": "测试",
      "batchNo": "111111",
      "skillCardNo": "312",
      "testReportNo": "444",
      "testCommissionNo": null,
      "itemBarCode": "112",
      "materialRemark": null,
      "request": "测试111122222",
      "itemRemark": "",
      "isRemoved": false,
      "creatorId": 10004,
      "creatorName": "租户管理员",
      "createdAt": "2019-08-02T08:35:55.000Z",
      "modifierId": 10004,
      "modifierName": "租户管理员",
      "updatedAt": "2019-08-12T07:19:20.000Z",
      "version": 553075780055040
    }, {
      "orgId": 521304467493376,
      "id": 553075824791552,
      "orderId": 553075778327040,
      "materialId": null,
      "materialCode": null,
      "materialName": "测试",
      "materialModel": "002001",
      "materialUnit": "吨",
      "classId": null,
      "classFullId": null,
      "quantity": 12.33,
      "actualQuantity": 23,
      "price": 23,
      "taxRate": 23,
      "manufacturer": "东三省",
      "batchNo": "测试",
      "skillCardNo": null,
      "testReportNo": null,
      "testCommissionNo": null,
      "itemBarCode": null,
      "materialRemark": null,
      "request": "",
      "itemRemark": "",
      "isRemoved": false,
      "creatorId": 10004,
      "creatorName": "租户管理员",
      "createdAt": "2019-08-02T08:35:57.000Z",
      "modifierId": 10004,
      "modifierName": "租户管理员",
      "updatedAt": "2019-08-12T07:19:20.000Z",
      "version": 553075824791552
    }],
    "isComplex": true
  }
  const result = await client.put('/api/mquantity/q-supply/553075778327040', {
    body: params,
    method: 'PUT',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
  })
  return result
}

// getOrganizationsByParent().then((data)=>{
//   console.log(data)
// })


putTest().then((data) => {
  console.log(data)
})