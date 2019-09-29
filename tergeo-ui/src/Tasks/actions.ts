import { Task } from '../types';
import { Dispatch } from 'redux';
import tasksApi, { TaskResponseResult } from '../api/tasksApi';

export enum TaskActions {
  FETCH_TASKS = 'FETCH_TASKS',
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

  const response = await tasksApi.createTask(task);

  if (response.result === TaskResponseResult.success) {
    dispatch({ type: TaskActions.CREATE_TASK_SUCCESS });
  } else {
    dispatch({ type: TaskActions.CREATE_TASK_ERROR });
  }
};

export const fetchTasks = () => {};
