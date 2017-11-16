import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
const Messages = new Mongo.Collection('messages');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({

  'deleteMsg': function(id) {
    Messages.remove({_id: id});
  }
})
