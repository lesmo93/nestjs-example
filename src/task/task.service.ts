import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TaskService {

    private tasks = [];

    getTasks(): any {
        return this.tasks;
    }

    getTask(id: number): CreateTaskDto {
        const taskFound = this.tasks.find( (task) =>  {
            console.log(`task.id: ${task.id} (${typeof task.id}), id: ${id} (${typeof id})`);
            return task.id === id;
            
        });



        if(!taskFound){
            throw new NotFoundException(`La tarea con ${id} no se ha encontrado`)
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto){
        console.log(task);

        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });

        return task;
    }

    updateTask(task: UpdateTaskDto){
        console.log(task);
        return 'Actualizado tareas';
    }

    deleteTask(){
        return 'Elimnando tareas';
    }

    updateTaskStatus(){
        return 'Actualizando estado tareas';
    }

}