import { Template } from 'meteor/templating';
import { TasksCollection } from "/imports/api/TasksCollection"; 
import './App.html';

Template.mainContainer.helpers({
  tasks() {
    return TasksCollection.find({}, { sort: { createdAt: -1, _id: -1 } });
  },
});