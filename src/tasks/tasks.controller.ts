import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { FindOneParams } from "./dto/FindOneParams.dto";

@Controller('/tasks')
export class TaskController {

    

    constructor(private tasksService : TasksService) {}

    @Get()
    getAllTasks(@Query() query:any){
        console.log(query)
        // get data in database
        // generate get api 
       return this.tasksService.getTasks();
    }

     @Get('/:id') // tasks/2-3-2-2
    getTask(@Param() params:FindOneParams){
       console.log(typeof params.id)
        // get data in database
        // generate get api 
       return this.tasksService.getTask(Number(params.id));
    }

    @Post()
    createTasks(@Body() task:CreateTaskDto ){
       
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