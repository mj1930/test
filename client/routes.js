Router.route("/", function() {
  this.render('login');
});

Router.route("/signup", function() {
  this.render('signup');
})

Router.route("/message", function() {
  this.render('message')
})
