import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from "/imports/api/TasksCollection";
import "../imports/api/TasksPublication";
import "../imports/api/TasksMethod"; 

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(async () => {
  // 1. Create the seed user if they don't exist
  if (!(await Accounts.findUserByUsername(SEED_USERNAME))) {
    await Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  // 2. Fetch the user we just created (or already existed)
  const user = await Accounts.findUserByUsername(SEED_USERNAME);

  // 3. Seed tasks securely using the user's ID
  if ((await TasksCollection.find().countAsync()) === 0) {
    const defaultTasks = [
      "Learn Meteor 3",
      "Style with PicoCSS",
      "Conquer the World",
    ];
    
    for (const taskName of defaultTasks) {
      await TasksCollection.insertAsync({ 
        text: taskName, 
        createdAt: new Date(),
        userId: user._id 
      });      
    }
  }
});