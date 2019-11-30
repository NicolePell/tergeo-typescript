import { TaskDetails } from '../types';
import { Dispatch } from 'redux';
import { saveTask, fetchAllTasks, TaskResponseResult } from '../api/tasksApi';

export enum TaskActions {
  FETCH_ALL_TASKS_START = 'FETCH_ALL_TASKS_START',
  FETCH_ALL_TASKS_SUCCESS = 'FETCH_ALL_TASKS_SUCCESS',
  CREATE_TASK_START = 'CREATE_TASK_START',
  CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS',
  CREATE_TASK_ERROR = 'CREATE_TASK_ERROR',
}

export type Action<Type, Payload = any> = {
  type: Type;
  payload?: Payload;
};

export const createTaskAction = (task: TaskDetails) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({ type: TaskActions.CREATE_TASK_START });

  const response = await saveTask(task);

  if (response.result === TaskResponseResult.success) {
    dispatch({ type: TaskActions.CREATE_TASK_SUCCESS });
  } else {
    dispatch({ type: TaskActions.CREATE_TASK_ERROR });
  }
};

export const fetchAllTasksAction = () => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch({ type: TaskActions.FETCH_ALL_TASKS_START });

  const response = await fetchAllTasks();

  if (response.result === TaskResponseResult.success) {
    dispatch({
      type: TaskActions.FETCH_ALL_TASKS_SUCCESS,
      payload: response.tasks,
    });
  }
};
