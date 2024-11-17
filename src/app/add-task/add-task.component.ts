import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
    <div class="task-form">
      <h2>Add Task</h2>
      <form (submit)="onAddTask($event)">
        <input
          type="text"
          [(ngModel)]="newTask"
          placeholder="Task Name"
          name="task"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>

  `,
})
export class AddTaskComponent {
  newTask: string = '';

  @Output() taskAdded = new EventEmitter<string>();

  onAddTask(event: Event) {
    event.preventDefault();
    if (this.newTask.trim()) {
      this.taskAdded.emit(this.newTask); // Emitir tarea
      this.newTask = '';
    }
  }
}
