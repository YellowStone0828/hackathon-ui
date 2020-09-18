import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: "Provide click function on any control",
    value: 'Feature: Click Feature\r\nScenario: Click Scenario\r\nGiven  open url "www.baidu.com"\r\nWhen  on page SearchPage\r\nThen  click SearchButton',
    media: '/static/images/products/product_1.png',
    title: 'Click',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description:"Provide select item function in Select control",
    value: 'Feature: Select Feature\r\nScenario: Select Scenario\r\nGiven  open url "www.anything.com"\r\nWhen  on page SearchPage\r\nThen  Select "any" in select ItemSelect.',
    media: '/static/images/products/product_2.png',
    title: 'Select',
    totalDownloads: '625'
  },
];
