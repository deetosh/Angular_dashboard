import { Injectable } from '@angular/core';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  schedules: Schedule[]=[
  ];
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  timeIntervals: string[] = Array.from({ length: 16 }, (_, index) => `${index + 6}:00 -${index+7}:00`);


  constructor() {
    // load the schedules from local storage during initialization 
    this.loadState();
    if (this.schedules === null || this.schedules === undefined) {
      this.schedules = [];
      this.initialize_schedule();
    }
  }

  initialize_schedule(){
    this.daysOfWeek.forEach(day => {
      this.timeIntervals.forEach(interval => {
       this.schedules.push(new Schedule(day,interval,''));
      });
    });
    console.log('State Initialized')
    this.saveState();
  }

  getSchedules(){
    return this.schedules;
  }

  getSchedule(day:string,time:string){
    return this.schedules.find(t=> t.day === day && t.time===time);
  }

  get_by_id(id:string){
    return this.schedules.find(t=> t.id==id);
  }

  updateSchedule(id:string, content: string){
    const schedule= this.get_by_id(id);
    if(schedule!=undefined)
      schedule.content=content;
      this.saveState();
  }

  saveState(){
    if(this.schedules!=undefined)
    localStorage.setItem('schedules',JSON.stringify(this.schedules))
  }

  loadState(){
    this.schedules= JSON.parse(localStorage.getItem('schedules'));
  }
}
