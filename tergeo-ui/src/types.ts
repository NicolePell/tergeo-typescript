export interface Task {
  description: string;
  completed: boolean;
}

export interface TaskState {
  tasks: Task[]
}
