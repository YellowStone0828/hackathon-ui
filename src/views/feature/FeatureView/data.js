import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: "Provide click function on any control",
    value: 'Feature: Order OPS flow\n Scenario: Send new order and do whole flow\n  Given Hangkong Market\n  When send a "New order"\n  Then check the ack\n  Then update jira\n  Then send email',
    media: '/static/images/products/product_1.png',
    title: 'New Order',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description:"Provide select item function in Select control",
    value: 'Feature: Select Feature\r\nScenario: Select Scenario\r\nGiven  open url "www.anything.com"\r\nWhen  on page SearchPage\r\nThen  Select "any" in select ItemSelect.',
    media: '/static/images/products/product_2.png',
    title: 'Modfiy Order',
    totalDownloads: '625'
  },
];
