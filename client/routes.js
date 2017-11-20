import { login } from './imports/login/login.js';
import { signup } from './imports/signup/signup.js';
import { message } from './imports/message/main.js';


Router.route("/", function() {
  this.render('login');
});

Router.route("/signup", function() {
  this.render('signup');
})

Router.route("/message", function() {
  this.render('message')
})
