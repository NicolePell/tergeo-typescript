export interface Task {
  description: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
  createTaskError: boolean;
  createTaskComplete: boolean;
}
