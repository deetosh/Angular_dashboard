import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from '../schedule.model';
import { ScheduleService } from '../schedule.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  
  daysOfWeek!: string[];
  timeIntervals!: string[];
  timetableCells!: Schedule[];

  constructor( private scheduleService: ScheduleService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.daysOfWeek= this.scheduleService.daysOfWeek;
    this.timeIntervals= this.scheduleService.timeIntervals;
    this.timetableCells= this.scheduleService.getSchedules();
  }  

  getSchedule(day: string, time: string): Schedule {
    return this.scheduleService.getSchedule(day,time)
  }

  getContent(day: string, time: string): string{
    const schedule:Schedule= this.getSchedule(day,time);
    if(schedule!=null || schedule!=undefined){
      return schedule.content;
    }
    else{
      return '';
    }
  }

  editOnClick(id: string){
    console.log('hello')
    this.router.navigateByUrl('/schedule').then(() => {
      this.router.navigate(['schedule', id]);
    });
  }

}

