let nock = require('nock');

module.exports.hash = "6db96510dc42d627085c1caeea0f29c1";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0/custom/models')
  .query(true)
  .reply(200, {"modelList":[{"modelId":"01e2ae1e-fa8e-48f6-9f1c-8a9b98bb150e","status":"ready","createdDateTime":"2020-08-18T17:39:33Z","lastUpdatedDateTime":"2020-08-18T17:39:34Z"},{"modelId":"0483c505-0117-4a9c-9335-a875c6fc422b","status":"ready","createdDateTime":"2020-08-05T23:29:08Z","lastUpdatedDateTime":"2020-08-05T23:29:17Z"},{"modelId":"070138c5-fa07-44eb-ba03-35ddddf5ecf3","status":"ready","createdDateTime":"2020-07-23T19:49:08Z","lastUpdatedDateTime":"2020-07-23T19:49:10Z"},{"modelId":"09187c4f-e3eb-4933-aad7-26ea0497c578","status":"ready","createdDateTime":"2020-08-18T09:07:45Z","lastUpdatedDateTime":"2020-08-18T09:07:55Z"},{"modelId":"0ab59b8c-d5ed-44bf-8cc9-c494a4e460ae","status":"ready","createdDateTime":"2020-08-18T09:13:24Z","lastUpdatedDateTime":"2020-08-18T09:13:33Z"},{"modelId":"10865444-5fe6-4b41-ae87-958991d61b04","status":"ready","createdDateTime":"2020-08-11T20:17:56Z","lastUpdatedDateTime":"2020-08-11T20:18:06Z"},{"modelId":"10a011c6-f496-448b-b7b1-d470daeeacd7","status":"ready","createdDateTime":"2020-08-18T18:46:55Z","lastUpdatedDateTime":"2020-08-18T18:47:04Z"},{"modelId":"1b802cbd-c776-4d1a-8850-2dd62856e56d","status":"ready","createdDateTime":"2020-08-05T23:04:01Z","lastUpdatedDateTime":"2020-08-05T23:04:14Z"},{"modelId":"1c18581a-6e41-48e1-8c5f-78b14f1ee383","status":"ready","createdDateTime":"2020-08-18T17:39:33Z","lastUpdatedDateTime":"2020-08-18T17:39:34Z"},{"modelId":"1fec2197-3f6f-4570-8e3a-d6470a36b314","status":"ready","createdDateTime":"2020-08-05T23:29:40Z","lastUpdatedDateTime":"2020-08-05T23:29:50Z"},{"modelId":"2c7a23ae-4831-439b-bcf8-e545846591fb","status":"invalid","createdDateTime":"2020-07-23T19:39:00Z","lastUpdatedDateTime":"2020-07-23T19:39:01Z"},{"modelId":"3071bc44-9709-4bf2-9975-186ab9c4bf2f","status":"ready","createdDateTime":"2020-08-18T16:47:55Z","lastUpdatedDateTime":"2020-08-18T16:47:56Z"},{"modelId":"34109a14-5845-407f-bbd0-5f3b37260059","status":"ready","createdDateTime":"2020-08-18T09:10:24Z","lastUpdatedDateTime":"2020-08-18T09:10:27Z"},{"modelId":"3591d8c4-4e8e-4b3a-b86e-526423a58113","status":"ready","createdDateTime":"2020-08-18T16:47:06Z","lastUpdatedDateTime":"2020-08-18T16:47:08Z"},{"modelId":"36df2713-30ca-4567-beeb-ea1c48b4677a","status":"ready","createdDateTime":"2020-08-18T09:12:42Z","lastUpdatedDateTime":"2020-08-18T09:12:54Z"},{"modelId":"3896496d-1645-4922-9cb4-91e5d5e69e4f","status":"ready","createdDateTime":"2020-08-18T16:47:30Z","lastUpdatedDateTime":"2020-08-18T16:47:32Z"},{"modelId":"389ef122-da82-4a9b-ae74-f9fbd40e107a","status":"invalid","createdDateTime":"2020-07-23T19:38:49Z","lastUpdatedDateTime":"2020-07-23T19:38:50Z"},{"modelId":"407bfd57-4b71-4750-9c71-4e4d6d92c0eb","status":"creating","createdDateTime":"2020-07-23T20:56:07Z","lastUpdatedDateTime":"2020-07-23T20:56:07Z"},{"modelId":"4085fe5b-954c-4182-911a-43baad360db0","status":"ready","createdDateTime":"2020-08-11T18:16:58Z","lastUpdatedDateTime":"2020-08-11T18:16:55Z"},{"modelId":"428722a5-36be-4f66-806a-f16e699207fd","status":"invalid","createdDateTime":"2020-07-23T19:39:06Z","lastUpdatedDateTime":"2020-07-23T19:39:06Z"},{"modelId":"4427c94c-7eb1-4c80-8317-7e13df1ba522","status":"ready","createdDateTime":"2020-08-05T23:29:18Z","lastUpdatedDateTime":"2020-08-05T23:29:18Z"},{"modelId":"47d812e3-0ca0-498f-a0cb-956ba10516ea","status":"ready","createdDateTime":"2020-05-11T22:34:02Z","lastUpdatedDateTime":"2020-05-11T22:34:05Z"},{"modelId":"49190b9f-c396-41ea-b799-79f32b6da3d1","status":"ready","createdDateTime":"2020-08-11T18:15:33Z","lastUpdatedDateTime":"2020-08-11T18:15:36Z"},{"modelId":"49c6485b-96ac-4b41-a5cf-5ba2dd68d51a","status":"ready","createdDateTime":"2020-07-07T19:17:50Z","lastUpdatedDateTime":"2020-07-07T19:17:52Z"},{"modelId":"4ac9a74b-27d9-45ff-846b-eab58d57f125","status":"invalid","createdDateTime":"2020-07-23T19:38:55Z","lastUpdatedDateTime":"2020-07-23T19:38:55Z"},{"modelId":"4ec054a8-15f0-41bb-aa8f-051646530b13","status":"ready","createdDateTime":"2020-08-18T18:47:06Z","lastUpdatedDateTime":"2020-08-18T18:47:12Z"},{"modelId":"4f28cc3d-2420-439a-805c-ef825ce38a60","status":"ready","createdDateTime":"2020-08-18T09:10:13Z","lastUpdatedDateTime":"2020-08-18T09:10:23Z"},{"modelId":"5070b678-2c18-4ac1-96c3-4b97087553af","status":"ready","createdDateTime":"2020-07-07T19:00:12Z","lastUpdatedDateTime":"2020-07-07T19:00:15Z"},{"modelId":"52668b65-a619-42d0-bc3d-504b1df7124e","status":"ready","createdDateTime":"2020-08-18T18:47:16Z","lastUpdatedDateTime":"2020-08-18T18:47:28Z"},{"modelId":"66228104-2965-4a32-9fbd-000a6ea76ebc","status":"creating","createdDateTime":"2020-07-23T19:49:40Z","lastUpdatedDateTime":"2020-07-23T19:49:40Z"},{"modelId":"6dd3950f-3fb1-4b55-8165-9ef5bc0ca77b","status":"ready","createdDateTime":"2020-08-11T18:22:27Z","lastUpdatedDateTime":"2020-08-11T18:22:42Z"},{"modelId":"6ef72968-cf56-440a-8cd7-d0e75aa58b3f","status":"ready","createdDateTime":"2020-08-18T17:39:22Z","lastUpdatedDateTime":"2020-08-18T17:39:31Z"}],"nextLink":"https://endpoint:443/formrecognizer/v2.0/custom/models?nextLink=2!236!MDAwMTMyIXN1YnNjcmlwdGlvbnMvZWUyMWUzMjc5ODU4NDlmNmI4YWM1YTZhMjBhMzBkZTIvbW9kZWxzLzZlZjcyOTY4LWNmNTYtNDQwYS04Y2Q3LWQwZTc1YWE1OGIzZi82ZWY3Mjk2OC1jZjU2LTQ0MGEtOGNkNy1kMGU3NWFhNThiM2YuanNvbiEwMDAwMjghOTk5OS0xMi0zMVQyMzo1OTo1OS45OTk5OTk5WiE-"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '258',
  'apim-request-id',
  '6792c127-8b45-4d3d-bc17-24951e29c82b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 18 Aug 2020 18:47:42 GMT'
]);