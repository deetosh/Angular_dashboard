import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {
  constructor(private route:ActivatedRoute,private todoservice:TodoService
    ,private router:Router){

  }

  todo!:Todo;

  ngOnInit(){
    let id= this.route.snapshot.params['id'];
    this.todo=this.todoservice.getTodo(id);
    console.log(this.todo.text)
  }

  onFormSubmit(form: NgForm){
    if(form.invalid){
      return;
    }
    this.todoservice.updateTodo(this.todo.id,form.value);
    this.router.navigateByUrl('/todos')
  }
}
