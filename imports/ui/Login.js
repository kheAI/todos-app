import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './Login.html';

Template.login.events({
  'submit .login-form'(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    Meteor.loginWithPassword(username, password);
  }
});