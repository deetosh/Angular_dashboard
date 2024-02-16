import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[]=[
  ];


  constructor() {
    // load the todos from local storage during initialization 
    this.loadState();
    if(this.todos===undefined || this.todos===null){
      this.todos=[];
    }
   }

  getTodos(){
    return this.todos;
  }

  getTodo(id:string){
    return this.todos.find(t=> t.id === id);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id:string, updatedTodoFields: Partial<Todo>){
    const todo= this.getTodo(id);
    if(todo!=undefined)
      Object.assign(todo,updatedTodoFields)
      this.saveState();
  }

  deleteTodo(id: string){
    const index= this.todos.findIndex(t=> t.id===id);
    if(index == -1)return 
    this.todos.splice(index,1);
    this.saveState();
  }

  saveState(){
    if(this.todos!=undefined)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  loadState(){
    this.todos= JSON.parse(localStorage.getItem('todos'));
  }
}
