import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Task List</h2>
    <ul>
      <li *ngFor="let task of tasks; index as i" [class.completed]="task.completed">
        <input 
          type="checkbox" 
          [checked]="task.completed" 
          (change)="toggleTask(i)"
        />
        <span>{{ task.text }}</span>
        <button (click)="deleteTask(i)">Delete</button>
      </li>
    </ul>
  `,
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks: { text: string; completed: boolean }[] = []; // Recibir tareas desde el componente principal
  @Output() taskToggled = new EventEmitter<number>(); // Emitir índice de la tarea marcada

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Eliminar tarea
  }

  toggleTask(index: number) {
    this.taskToggled.emit(index); // Emitir evento para cambiar el estado de la tarea
  }
}
