import { v4 as uuidv4 } from 'uuid';

// class defining a schedule
export class Schedule{
  day!: string;
  time!: string;
  content!: string;
  id!: string;

  constructor(day:string, time:string, content:string){
    this.id= uuidv4();
    this.day=day;
    this.time=time;
    this.content=content;
  }

}