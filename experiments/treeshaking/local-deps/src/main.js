import { customers } from './api.js';

const customerId = 5;

customers.getCustomerData(customerId)
  .then(data => {
    return {
      name: data.name,
      email: 'alice@hotmail.com'
    };
  })
  .then(data => customers.updateCustomerData(customerId, data));
