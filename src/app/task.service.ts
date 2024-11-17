import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: string[] = [];

  addTask(task: string) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
