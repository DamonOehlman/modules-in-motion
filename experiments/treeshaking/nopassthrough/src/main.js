import { getCustomerData, updateCustomerData } from './api/customers.js';

const customerId = 5;

getCustomerData(customerId)
  .then(data => {
    return {
      name: data.name,
      email: 'alice@hotmail.com'
    };
  })
  .then(data => updateCustomerData(customerId, data));
