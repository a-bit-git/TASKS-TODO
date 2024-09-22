import { Component, inject } from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss'],
})
export class CompletedTaskComponent {
  taskList: any[] = [];
  localStorageService = inject(LocalStorageService);

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskList = this.localStorageService
      .getAllTasks()
      .filter((task: any) => task.completed);
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
}

// Complete task .ts

