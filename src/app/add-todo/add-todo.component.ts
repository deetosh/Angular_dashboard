import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  showValidationErrors: boolean=false;

  constructor(private todoService: TodoService,private router:Router){
  }
  
  onFormSubmit(form: NgForm){
    if(form.invalid){
      this.showValidationErrors=true;
      return;
    }
    this.todoService.addTodo(new Todo(form.value.text))
    this.router.navigateByUrl('/todos')
  }
}
