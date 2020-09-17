import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Feautre: Click Feature\r\nScenario: Click Scenario\r\nGiven WebAgent open url "www.baidu.com"\r\nWhen WebAgent on page SearchPage\r\nThen WebAgent click SearchButton',
    media: '/static/images/products/product_1.png',
    title: 'Click',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Feautre: Select Feature\r\nScenario: Select Scenario\r\nGiven WebAgent open url "www.anything.com"\r\nWhen WebAgent on page SearchPage\r\nThen WebAgent Select "any" in select ItemSelect.',
    media: '/static/images/products/product_2.png',
    title: 'Select',
    totalDownloads: '625'
  },
  // {
  //   id: uuid(),
  //   createdAt: '03/04/2019',
  //   description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
  //   media: '/static/images/products/product_3.png',
  //   title: 'Slack',
  //   totalDownloads: '857'
  // },
  // {
  //   id: uuid(),
  //   createdAt: '04/04/2019',
  //   description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
  //   media: '/static/images/products/product_4.png',
  //   title: 'Lyft',
  //   totalDownloads: '406'
  // },
  // {
  //   id: uuid(),
  //   createdAt: '04/04/2019',
  //   description: 'GitHub is a web-based hosting service for version control of code using Git.',
  //   media: '/static/images/products/product_5.png',
  //   title: 'GitHub',
  //   totalDownloads: '835'
  // },
  // {
  //   id: uuid(),
  //   createdAt: '04/04/2019',
  //   description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
  //   media: '/static/images/products/product_6.png',
  //   title: 'Squarespace',
  //   totalDownloads: '835'
  // }
];
