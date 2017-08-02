export function getCustomerData(customerId) {
  return Promise.resolve({
    name: 'Alice',
    email: 'alice@test.com'
  });
}

export function updateCustomerData(customerId, data) {
  return Promise.resolve('I would post data to the server');
}

export function deleteCustomer(customerId) {
  return Promise.resolve('I would delete the customer');
}
