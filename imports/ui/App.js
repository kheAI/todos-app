import { Template } from 'meteor/templating';
import { TasksCollection } from "/imports/api/TasksCollection"; 
import '/imports/api/TasksMethod.js'; 
import './App.html';
import './Task.html';

const HIDE_COMPLETED_STRING = "hideCompleted";

Template.mainContainer.onCreated(function () {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks'); // Ask the server for our data!
});

Template.mainContainer.helpers({
  tasks() {
    const instance = Template.instance();
    const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);

    const hideFilter = { isChecked: { $ne: true } };

    return TasksCollection.find(hideCompleted ? hideFilter : {}, {
      sort: { createdAt: -1, _id: -1 },
    });
  },
  hideCompleted() {
    return Template.instance().state.get(HIDE_COMPLETED_STRING);
  },
  incompleteCount() {
    const incompleteTasksCount = TasksCollection.find({ isChecked: { $ne: true } }).count();
    return incompleteTasksCount ? `(${incompleteTasksCount})` : '';
  },
  isUserLoggedIn() {
    return !!Meteor.user();
  },
  getUser() {
    return Meteor.user();
  },
});

Template.form.events({
  async "submit .task-form"(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    // Call the server Method instead of direct DB insert
    await Meteor.callAsync("tasks.insert", text);      

    target.text.value = '';
  }
});

Template.mainContainer.events({
  "click #hide-completed-button"(event, instance) {
    const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
  },
  'click .logout'() {
    Meteor.logout();
  },
});