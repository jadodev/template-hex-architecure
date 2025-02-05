import { Task } from "src/domain/entity/task.entity";

export interface TaskInterfacePortIn {
    create( task: Task ): Promise <Task>;
    getTaskById( id: number ): Promise <Task>;
    getTasks(): Promise <Task[]>;
}