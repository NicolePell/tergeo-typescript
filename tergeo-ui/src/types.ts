import { TaskState } from './Tasks/reducer';

export interface Task {
  description: string;
  completed: boolean;
}

export interface ApplicationState {
  tasks: TaskState;
}
