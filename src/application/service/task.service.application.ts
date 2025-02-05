import { Inject, Injectable } from "@nestjs/common";
import { TaskInterfacePortIn } from "src/domain/ports/in/task.interface.portIn";
import { TaskDTO } from "../dto/task.DTO";
import { TaskMapper } from "../mapper/task.mapper";

@Injectable()
export class TaskServiceApplication {
    constructor(@Inject('TaskInterfacePortIn') private readonly taskPortIn: TaskInterfacePortIn){}

    async createTask( taskDTO: TaskDTO ): Promise <TaskDTO>{
        const taskToDomain = TaskMapper.toDomain(taskDTO);
        const newTask = await this.taskPortIn.create(taskToDomain);
        return TaskMapper.toDTO(newTask);
    } 

    async getTaskById(id: number): Promise<TaskDTO>{
        const task = await this.taskPortIn.getTaskById(id);

        return TaskMapper.toDTO(task);
    }

    async getTasks(): Promise<TaskDTO[]>{
        const tasks = await this.taskPortIn.getTasks();
        return tasks.map(task =>TaskMapper.toDTO(task))
    }
}
