const { prompt } = require('promptly');
const { getCustomerData, updateCustomerData } = require('./api');
const validateEmail = require('./validators/email');

function start() {
  const customerId = 5;

  prompt('please enter new email:').then(newEmail => {
    return validateEmail(newEmail)
      .then(() => getCustomerData(customerId))
      .then(({ name, email }) => {
        return updateCustomerData(customerId, { name, email: newEmail });
      })
  })
  .then(() => console.log('updated successfully'))
  .catch(err => console.log(err));
}

start();
