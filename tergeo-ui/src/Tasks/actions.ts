import { Task } from '../types';
import { Dispatch } from 'redux';
import tasksApi from '../api/tasksApi';

export enum TaskActions {
  CREATE_TASK_START = 'CREATE_TASK_START',
  CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS',
  CREATE_TASK_ERROR = 'CREATE_TASK_ERROR',
}

export type Action<Type, Payload = any> = {
  type: Type;
  payload?: Payload;
};

export const createTask = (task: Task) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({ type: TaskActions.CREATE_TASK_START });
  try {
    await tasksApi.createTask(task);
    dispatch({ type: TaskActions.CREATE_TASK_SUCCESS });
  } catch (error) {
    console.log({ error });
  }
};
