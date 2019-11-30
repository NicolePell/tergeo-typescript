import { TaskState } from './Tasks/reducer';

export interface TaskDetails {
  description: string;
  completed: boolean;
}

export interface Task extends TaskDetails {
  id: string;
}

export interface ApplicationState {
  tasks: TaskState;
}
