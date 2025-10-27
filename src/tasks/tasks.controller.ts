import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

    tasksService : TasksService

    constructor(tasksService : TasksService) {
        this.tasksService=tasksService
    }

    @Get()
    getAllTasks(){

        // get data in database
        // generate get api 
       return this.tasksService.getTasks();
    }

    @Post()
    createTasks(@Body() task:any ){
       
        return this.tasksService.createTasks(task)
    }
    @Put()
    updateTask(){
        return this.tasksService.updateTask()
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask()
    }

    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus()
    }

}