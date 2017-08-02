define('app', ['./api', './validators/email'], function(api, validate) {
  const customerId = prompt('get user id');
  const newEmail = prompt('enter a new email');

  validate(newEmail)
    .then(() => api.getCustomerData(customerId))
    .then(({ name, email }) => {
      return api.updateCustomerData(customerId, { name, email: newEmail });
    })
    .then(() => console.log('updated successfully'))
    .catch(err => console.log(err));
});
