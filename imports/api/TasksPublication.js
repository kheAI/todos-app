import { Meteor } from "meteor/meteor";
import { TasksCollection } from "./TasksCollection";

Meteor.publish("tasks", function () {
    // Only publish tasks that belong to the currently logged-in user
    return TasksCollection.find({ userId: this.userId });
});