Template.login.events ({

  'click #login': function(evt, tmpl) {
    evt.preventDefault();
    var email = $("#exampleInputEmail1").val()
    var pass  = $('#exampleInputPassword1').val();
    Meteor.loginWithPassword(email, pass, function(err, result) {
      if (err) {
        console.log(err);
      }
      else {
        Router.go('/message');
      }
    })
  }
})

Template.login.onRendered(function(){
})
