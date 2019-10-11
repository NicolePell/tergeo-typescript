import { Action, TaskActions } from './actions';
import { Task } from '../types';

export type TaskState = {
  tasks: Task[];
  createTaskError: boolean;
  createTaskComplete: boolean;
};

export const initialState: TaskState = {
  tasks: [],
  createTaskError: false,
  createTaskComplete: false,
};

export default (state = initialState, action: Action<TaskActions>) => {
  switch (action.type) {
    case TaskActions.CREATE_TASK_SUCCESS:
      return { ...state, createTaskComplete: true };
    case TaskActions.CREATE_TASK_ERROR:
      return { ...state, createTaskError: true };
    case TaskActions.FETCH_ALL_TASKS_SUCCESS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
