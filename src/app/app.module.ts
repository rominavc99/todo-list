import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent, // Registrar componentes aquí
  ],
  imports: [
    BrowserModule,
    FormsModule, // Para habilitar [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
