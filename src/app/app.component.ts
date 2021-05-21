import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qa-test';

  todoItem: string;
  todoItems = [];
  todoItemStatus = [];

  constructor() {
    this.todoItems = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];
    this.todoItemStatus = localStorage.getItem('todoStatus') ? JSON.parse(localStorage.getItem('todoStatus')) : [];
  }

  add(): void {
    this.todoItems.push(this.todoItem);
    this.todoItemStatus.push(false);
    this.todoItem = null;
    this.save();
  }

  deleteItem(index: number): void {
    this.todoItems.splice(index, 1);
    this.todoItemStatus.splice(index, 1);
    this.save();
  }

  save(): void {
    localStorage.setItem('todo', JSON.stringify(this.todoItems))
    localStorage.setItem('todoStatus', JSON.stringify(this.todoItemStatus))
  }
}
