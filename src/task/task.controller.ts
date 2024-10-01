import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('tasks')
@Controller('/tasks')
export class TaskController {

    constructor(private taskService: TaskService) {    };

    @Get()
    @ApiOperation({ summary: 'Traer todas las tareas'})
    getAllTask(@Query() query: any){
        console.log(query)
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id', ParseIntPipe) id : number){
        return this.taskService.getTask(  id  );
    }

    @Post()
     createTask(@Body() task: CreateTaskDto){
        return this.taskService.createTask(task);
    }

    @Put()
    updateTask(@Body() task : UpdateTaskDto){
        return this.taskService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.taskService.deleteTask();
    }

    @Patch()
    updateTaskStatus(){
        return this.taskService.updateTaskStatus();
    }

    

}