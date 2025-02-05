import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { TaskDTO } from "src/application/dto/task.DTO";
import { TaskServiceApplication } from "src/application/service/task.service.application";

@Controller("tasks")
export class TaskController{
    constructor(private readonly taskService: TaskServiceApplication){}

    @Post()
    async create(@Body() taskDTO: TaskDTO): Promise<TaskDTO>{
        return this.taskService.createTask(taskDTO);
    }

    @Get("/:id")
    async getTaskById(@Param("id") id: number): Promise<TaskDTO> {
        try {
            return await this.taskService.getTaskById(id);
        } catch (error) {
            throw new NotFoundException('Task not found');
        }
    }

    @Get()
    async getTasks(): Promise<TaskDTO[]>{
        return await this.taskService.getTasks();
    }
}