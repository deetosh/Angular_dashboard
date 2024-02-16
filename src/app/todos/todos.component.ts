import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
import { trigger,transition,animate,style } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  animations:[
    // giving annimations ***
    trigger('todoItemAnim',[
      transition(':leave',[
        animate(600,style({
          opacity:0,
          height:0,
          marginBottom:0
        }))
      ])
    ])
  ]
})
export class TodosComponent implements OnInit {

  todos!:Todo[];

  constructor(private todoService: TodoService,private router:Router){

  }

  ngOnInit(): void {
    this.todos= this.todoService.getTodos();
    // on init the from todoService getting the todos list 
  }

  Completed(todo: Todo){
    this.todoService.updateTodo(todo.id,{completed: !todo.completed})
    // marking a todo as completed 
  }

  onEditClick(todo: Todo){
    this.router.navigate(['/todos',todo.id]);
    // editing the todo
  }

  onRemoveClick(todo: Todo){
    this.todoService.deleteTodo(todo.id);
    // deleting the todo
  }
}
