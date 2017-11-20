import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import _ from 'underscore';
import './main.html';
const Messages = new Mongo.Collection('messages');

Template.message.events ({

  'click .logout': function(evt, tmpl) {
    evt.preventDefault();
    Meteor.logout(function(err) {
      if (err) {
        console.log(err);
      }
      else {
        Router.go('/');
      }
    })
  },

  'click .submit': function(evt, tmpl) {
    evt.preventDefault();
    var message = $('#message').val();
    addedAt = new Date();
    var obj = {
      message,
      addedAt
    }
    var id = Messages.insert({obj});
  },

  'click .delete': function(evt, tmpl) {
    evt.preventDefault();
    var id = evt.currentTarget.id;
    Meteor.call('deleteMsg', id, function(err, res) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('success');
      }
    })
  }
});

Template.message.helpers({

  display: function() {
    var messages =  Messages.find({}).fetch();
    return messages.reverse();
  }
})

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});
