import { Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './important-tasks.component.html',
  styleUrls: ['./important-tasks.component.scss'],
})
export class ImportantTaskComponent {
  taskList: any[] = [];
  localStorageService = inject(LocalStorageService);

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskList = this.localStorageService
      .getAllTasks()
      .filter((task: any) => task.important);
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

// Important task . ts

