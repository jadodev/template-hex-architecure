import { Injectable } from "@nestjs/common";
import { Task } from "src/domain/entity/task.entity";
import { TaskInterfacePortOut } from "src/domain/ports/out/task.interface.portOut";

@Injectable()
export class TaskRepository implements TaskInterfacePortOut {

    private tasks: Task[] = [];

    async save(task: Task): Promise<Task> {
        task.setId(this.tasks.length + 1);
        await this.tasks.push(task);
        return task;
    }

    async getTaskById(id: number): Promise<Task> {
        console.log(this.tasks);
        console.log(id)
        const findUser = this.tasks.find(task => task.getId() === id);
        
        if(!findUser){
            throw new Error("Task not Found");
        }

        return findUser;
    }


    async getTasks(): Promise<Task[]> {
        return await this.tasks;
    }

}