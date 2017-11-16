Template.signup.events({

  'click #signup' : function(event, template) {
    event.preventDefault();
    var email = $("#exampleInputEmail1").val();
    var password = $("#exampleInputPassword1").val();
    Accounts.createUser({email: email , password: password}, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        Router.go('/message');
      }
    });
  }
})
