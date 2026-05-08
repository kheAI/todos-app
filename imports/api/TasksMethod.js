import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./TasksCollection";

Meteor.methods({
  async "tasks.insert"(text) {
    // 1. Check if the user is logged in
    if (!this.userId) throw new Meteor.Error('Not authorized.');

    // 2. Perform the secure action
    await TasksCollection.insertAsync({
      text,
      createdAt: new Date(),
      userId: this.userId, // Securely attach the user ID from the server
    });
  },

  async "tasks.remove"(taskId) {
    if (!this.userId) throw new Meteor.Error('Not authorized.');
    
    // Ensure the user only deletes THEIR OWN task
    await TasksCollection.removeAsync({ _id: taskId, userId: this.userId });
  },

  async "tasks.setChecked"(taskId, isChecked) {
    if (!this.userId) throw new Meteor.Error('Not authorized.');
    
    await TasksCollection.updateAsync(
      { _id: taskId, userId: this.userId },
      { $set: { isChecked } }
    );
  }
});