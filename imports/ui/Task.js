import { Template } from 'meteor/templating';
import { TasksCollection } from "/imports/api/TasksCollection";
import '/imports/api/TasksMethod.js';
import './Task.html';

Template.task.events({
    async 'click .toggle-checked'() {
      await Meteor.callAsync("tasks.setChecked", this._id, !this.isChecked);
    },
    
    async 'click .delete'() {
      await Meteor.callAsync("tasks.remove", this._id);
    },
});