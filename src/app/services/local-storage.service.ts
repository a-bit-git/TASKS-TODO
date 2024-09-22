import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageKey = 'tasks';

  constructor() {}

  private isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  getAllTasks(): any[] {
    if (!this.isLocalStorageAvailable()) {
      return [];
    }
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  saveTask(task: any) {
    const tasks = this.getAllTasks();
    tasks.push(task);
    this.updateTasks(tasks);
  }

  updateTask(updatedTask: any) {
    const tasks = this.getAllTasks();
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      this.updateTasks(tasks);
    }
  }

  deleteTask(taskId: any) {
    const tasks = this.getAllTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    this.updateTasks(updatedTasks);
  }

  updateTasks(tasks: any[]) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }
  }
}

// this is local storage service ts file

