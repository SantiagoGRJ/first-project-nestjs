import { Injectable } from "@nestjs/common";
import { ITasks } from "./interfaces/tasks.interface";


@Injectable()
export class TasksService{

    private tasks = []

    getTasks(): ITasks[] {
        return this.tasks
    }

    createTasks(task:any ){
        console.log(task)
        this.tasks.push(task)
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