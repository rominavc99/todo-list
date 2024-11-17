import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-add-task (taskAdded)="addTask($event)"></app-add-task>
    <app-task-list [tasks]="tasks" (taskToggled)="toggleTask($event)"></app-task-list>
  `,
})
export class AppComponent {
  tasks: { text: string; completed: boolean }[] = []; // Cambiar el tipo del array

  addTask(task: string) {
    this.tasks.push({ text: task, completed: false }); // Nueva tarea inicia como no completada
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed; // Cambiar el estado de completado
  }
}
