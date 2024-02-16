import { v4 as uuidv4 } from 'uuid';

// class defining a todo 
export class Todo{
    id!:string;
    completed!: boolean;

    constructor(public text: string){
        this.id = uuidv4();
        this.text= text;
    }
}