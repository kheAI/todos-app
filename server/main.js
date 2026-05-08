import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection"; // or "../api/TasksCollection"

const insertTask = (taskText) =>
  TasksCollection.insertAsync({ text: taskText });

Meteor.startup(async () => {
  // If the database is empty, add these tasks
  if ((await TasksCollection.find().countAsync()) === 0) {
    [
      "Learn Meteor 3",
      "Style with PicoCSS",
      "Conquer the World",
    ].forEach(insertTask);
  }
});