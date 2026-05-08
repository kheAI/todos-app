import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from "/imports/api/TasksCollection";
import "../imports/api/TasksPublication";

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

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

  if (!(await Accounts.findUserByUsername(SEED_USERNAME))) {
    await Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});