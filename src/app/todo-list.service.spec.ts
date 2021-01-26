import { TestBed, async, inject } from '@angular/core/testing';
import { TodoListService } from './todo-list.service';
import { Todo} from "./todo";

describe('TodoListService', () => {  

  beforeEach(() => {    
    TestBed.configureTestingModule({
      providers: [TodoListService]
    });   
  });

  it('should be created', inject([TodoListService], (service: TodoListService) => {
    expect(service).toBeTruthy();
  }));
});

describe('#getAllTodos() precompiled in localstorage', () => {  
  beforeEach(() => {
    localStorage.clear();
  });
  it('should return an empty array by default', inject([TodoListService], (service: TodoListService) => {
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should return all todos', inject([TodoListService], (service: TodoListService) => {    
    service.addTodo("Task 1 to complete");
    service.addTodo("Task 2 to complete");
    
    expect(service.getAllTodos()).toEqual([{id: 1, title:"Task 1 to complete", isCompleted: false}, {id: 2, title:"Task 2 to complete", isCompleted: false}]);
  }));

});

