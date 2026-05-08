import { Template } from 'meteor/templating';
import { TasksCollection } from "/imports/api/TasksCollection"; 
import './App.html';

Template.mainContainer.helpers({
  tasks() {
    return TasksCollection.find({}, { sort: { createdAt: -1, _id: -1 } });
  },
});

Template.form.events({
  async "submit .task-form"(event) {
    event.preventDefault(); // Prevent page reload

    const target = event.target;
    const text = target.text.value;

    // Insert directly into the database from the client!
    await TasksCollection.insertAsync({
      text,
      createdAt: new Date(),
    });      

    target.text.value = ''; // Clear form
  }
});