import { Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent }, // Página principal muestra la lista de tareas
  { path: 'add-task', component: AddTaskComponent }, // Página para agregar tareas
];
