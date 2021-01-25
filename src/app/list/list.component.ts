import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor(private todoListService: TodoListService){
    this.todoListService = todoListService;    
  }

  public todosList = this.todoListService.todosList;

  
  ngOnInit(): void {
  }  

  deleteTodo(id: number) {    
    this.todoListService.deleteTodo(id);    
    this.todosList = this.todoListService.todosList;
  }

  toggleTodoComplete(id: number, isCompleted: boolean) {    
    this.todoListService.toggleTodoComplete(id, isCompleted);    
  }

}

