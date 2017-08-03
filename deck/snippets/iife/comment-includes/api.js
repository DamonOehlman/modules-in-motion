function getCustomerData(id) {
  return Promise.resolve({
    name: 'alice',
    email: 'alice@test.com'
  });
}

function updateCustomerData(id, customerData) {
  return Promise.reject(new Error(`could not update customer ${id}`));
}
