import { Template } from 'meteor/templating';
import { TasksCollection } from "/imports/api/TasksCollection";
import './Task.html';

Template.task.events({
  async 'click .toggle-checked'() {
    await TasksCollection.updateAsync(this._id, {
      $set: { isChecked: !this.isChecked },
    });
  },
  
  async 'click .delete'() {
    await TasksCollection.removeAsync(this._id);
  },
});