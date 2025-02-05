import { Task } from "src/domain/entity/task.entity";
import { TaskDTO } from "../dto/task.DTO";

export class TaskMapper {
    public static toDTO( task: Task): TaskDTO{
        return {
            id: task.getId(),
            title: task.getTitle(),
        }
    }

    public static toDomain( taskDTO: TaskDTO ): Task{
        return new Task(
            taskDTO.id,
            taskDTO.title,
        )
    }
}