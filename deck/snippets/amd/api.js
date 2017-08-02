define('api', () => {
  function getCustomerData(id) {
    return Promise.resolve({
      firstName: 'Alice',
      email: 'alice@test.com'
    });
  }

  function updateCustomerData(id, data) {
    return Promise.reject(new Error(`could not update customer ${id}`));
  }

  return {
    getCustomerData,
    updateCustomerData
  };
});
