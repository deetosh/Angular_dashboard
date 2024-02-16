import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Schedule } from '../schedule.model';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrl: './edit-schedule.component.css'
})
export class EditScheduleComponent {

  constructor(private route:ActivatedRoute,private scheduleService:ScheduleService
    ,private router:Router,){

  }

  schedule!:Schedule;

  ngOnInit(){
    let id= this.route.snapshot.params['id'];
    this.schedule=this.scheduleService.get_by_id(id);
  }

  onFormSubmit(form: NgForm){
    if(form.invalid){
      return;
    }
    this.scheduleService.updateSchedule(this.schedule.id,form.value.text);
    this.router.navigateByUrl('/schedule');
  }
}
