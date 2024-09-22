import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/states.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, PageTitleComponent, TaskListComponent],
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTaskComponent {
  newTask = '';
  initialTaskList: any[] = [];
  taskList: any[] = [];
  localStorageService = inject(LocalStorageService);
  stateService = inject(StateService);

  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      if (value) {
        this.taskList = this.initialTaskList.filter((x) =>
          x.title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.taskList = this.initialTaskList;
      }
    });
    this.getAllTasks();
  }

  addTask() {
    const task = {
      id: Date.now(),
      title: this.newTask,
      completed: false,
      important: false,
    };
    this.localStorageService.saveTask(task);
    this.newTask = '';
    this.getAllTasks();
  }

  getAllTasks() {
    this.initialTaskList = this.taskList = this.localStorageService.getAllTasks();
  }

  onComplete(task: any) {
    task.completed = !task.completed;
    this.localStorageService.updateTask(task);
    this.getAllTasks();
  }

  onImportant(task: any) {
    task.important = !task.important;
    this.localStorageService.updateTask(task);
    this.getAllTasks();
  }

  onDelete(taskId: number) {
    this.localStorageService.deleteTask(taskId);
    this.getAllTasks();
  }
}

// All task .ts

