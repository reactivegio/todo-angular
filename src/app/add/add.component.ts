import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newTodo = "";
  constructor(private todoListService: TodoListService){
    this.todoListService = todoListService;  
  }

  ngOnInit(): void {
  }

  addTodo(newText: string) {    
    this.todoListService.addTodo(newText);        
  }

  onSubmit(f: NgForm){    
    this.addTodo(f.value.newTodo); 
    if(f.controls.hasOwnProperty("newTodo")) {
      f.controls["newTodo"].setValue('');
    }      
  }

}
