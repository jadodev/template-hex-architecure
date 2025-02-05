import { Task } from "src/domain/entity/task.entity";

export interface TaskInterfacePortOut{
    save(task: Task): Promise <Task>;
    getTaskById(id: number): Promise <Task>;
    getTasks(): Promise <Task[]>;
}