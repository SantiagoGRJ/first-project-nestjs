import { Injectable, NotFoundException } from "@nestjs/common";
import { ITasks } from "./interfaces/tasks.interface";


@Injectable()
export class TasksService{

    private tasks : any[] = [
        {
            id:1,
            name:"First time",
            content:"First content",
            status:true
        }
    ]

    getTasks(): ITasks[] {
        return this.tasks
    }

    getTask(id:number){
       const taskFound = this.tasks.find(task => task.id === id)

       if(!taskFound){
        return new NotFoundException(`Task with id ${id} not found`)
       }

       return taskFound
    }

    createTasks(task:ITasks ){
       // console.log(task)
        this.tasks.push({
            ...task,
            id:this.tasks.length+1,
        })
        return task
    }
    updateTask(){
        return "updating task"
    }
    deleteTask(){
        return "deleting task"
    }
    updateTaskStatus(){
        return "updating task status"
    }

}