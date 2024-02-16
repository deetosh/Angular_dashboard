import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo

  @Output() editClick: EventEmitter<void>= new EventEmitter<void>();
  @Output() removeClick: EventEmitter<void> = new EventEmitter<void>();
  constructor(){

  }

  ngOnInit():void{

  }

  removeTodo(){
    this.removeClick.emit();
    // on clicking the delete button an event is emitted
  }

  EditTodo(){
    this.editClick.emit();
    // on clicking the edit button an event is emitted
  }

}
