import { Task } from '../types';

export enum TaskActions {
  submitTaskStart = 'SUBMIT_TASK_START',
  submitTaskSuccess = 'SUBMIT_TASK_SUCCESS',
  submitTaskError = 'SUBMIT_TASK_ERROR',
}

export type Action<Type, Payload = any> = {
  type: Type;
  payload?: Payload;
};

export const saveTask = (task: Task) => {
  console.log('saveTask action', task);
};
