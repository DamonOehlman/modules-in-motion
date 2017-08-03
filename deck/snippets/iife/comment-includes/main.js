var app = (function(){

  //= validators/email.js
  //= api.js

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

  return { run: run };
})();

app.run();
