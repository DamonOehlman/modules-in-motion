var app = (function(){

  function run() {
    const customerId = prompt('get user id');
    const newEmail = prompt('enter a new email');

    validateEmail(newEmail)
      .then(() => getCustomerData(customerId))
      .then(({ name, email }) => {
        return updateCustomerData(customerId, { name, email: newEmail });
      })
      .then(() => console.log('updated successfully'))
      .catch(err => console.log(err));
  }

  function validateEmail(email) {
    return Promise.resolve(true);
  }

  function getCustomerData(id) {
    return Promise.resolve({
      name: 'alice',
      email: 'alice@test.com'
    });
  }

  function updateCustomerData(id, customerData) {
    return Promise.reject(new Error(`could not update customer ${id}`));
  }

  return {
    run: run
  };
})();

app.run();
