var Validators = {};
Validators.email = function(email) {
  // TODO: implement email validator
  return true;
};

var App = {
  run: function() {
    var newEmail = prompt('new email');
    if (Validators.email(newEmail)) {
      this.save(newEmail);
    }
  },

  save: function(newEmail) {
    console.log('New email saved');
  }
};

App.run();
