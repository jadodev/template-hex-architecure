import { Inject, Injectable } from "@nestjs/common";
import { TaskInterfacePortIn } from "../ports/in/task.interface.portIn";
import { Task } from "../entity/task.entity";
import { TaskInterfacePortOut } from "../ports/out/task.interface.portOut";

@Injectable()
export class TaskServiceDomain implements TaskInterfacePortIn {
    constructor(@Inject('TaskInterfacePortOut') private readonly taskPortOut: TaskInterfacePortOut){}

    async create(task: Task): Promise<Task> {
        return await this.taskPortOut.save(task);
    }

    async getTaskById(id: number): Promise<Task> {
        const findUser = await this.taskPortOut.getTaskById(id);

        if(!findUser){
            throw new Error("User not found");
        }

        return findUser;
    }

    async getTasks(): Promise<Task[]> {
        return await this.taskPortOut.getTasks();
    }
}