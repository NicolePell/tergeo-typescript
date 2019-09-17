import { Task } from '../types';

export enum TaskActions {
  CREATE_TASK_START = 'CREATE_TASK_START',
  CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS',
  CREATE_TASK_ERROR = 'CREATE_TASK_ERROR',
}

export type Action<Type, Payload = any> = {
  type: Type;
  payload?: Payload;
};

export const createTaskAction = (task: Task): Action<TaskActions> => {
  console.log('saveTask action', task);
  return { type: TaskActions.CREATE_TASK_START };
};
