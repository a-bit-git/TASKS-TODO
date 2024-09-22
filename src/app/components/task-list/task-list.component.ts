import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() taskList: any[] = [];
  @Output() complete = new EventEmitter<any>();
  @Output() important = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  onTaskComplete(task: any) {
    this.complete.emit(task);
  }

  onTaskImportant(task: any) {
    this.important.emit(task);
  }

  onTaskDelete(task: any) {
    this.delete.emit(task.id);
  }
}

// task-list .ts file

