import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {

  storagePersisted: Todo[] = localStorage.getItem("todoDB") ?  JSON.parse(localStorage.getItem("todoDB")) : [];
  /** To manage last id for add purpose get max id if persisted in storage */
  lastId: number = Math.max.apply(Math, this.storagePersisted.map(function(o) { return o.id; })) | 0;
  todosList: Todo[] = this.storagePersisted;

  constructor() {}

  addTodo(todoText: string): TodoListService {
    this.todosList.push({
      id: ++this.lastId,
      title: todoText,
      isCompleted: false,
    });
    // persist on localStorage
    localStorage.setItem("todoDB", JSON.stringify(this.todosList))
    return this;
  }

  deleteTodo(id: number): TodoListService {    
    this.todosList = this.todosList.filter((todo: Todo) => todo.id !== id);
    localStorage.setItem("todoDB", JSON.stringify(this.todosList))
    return this;
  }

  getAllTodos(): Todo[]{
    return this.todosList;
  }

  getTodoById(id: number): Todo {
    return this.todosList
      .filter(todo => todo.id === id)
      .pop();
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    localStorage.setItem("todoDB", JSON.stringify(this.todosList))
    return todo;
  }

  toggleTodoComplete(id: number, isCompleted: boolean){    
    let updatedTodo = this.updateTodoById(id, {
      isCompleted: !isCompleted
    });
    return updatedTodo;
  }
}
