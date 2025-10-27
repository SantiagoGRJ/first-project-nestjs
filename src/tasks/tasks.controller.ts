import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TaskController {

    tasksService : TasksService

    constructor(tasksService : TasksService) {
        this.tasksService=tasksService
    }

    @Get()
    getAllTasks(@Query() query:any){
        console.log(query)
        // get data in database
        // generate get api 
       return this.tasksService.getTasks();
    }

     @Get('/:id') // tasks/2-3-2-2
    getTask(@Param('id') id:string){
       console.log(id)
        // get data in database
        // generate get api 
       return this.tasksService.getTask(Number(id));
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