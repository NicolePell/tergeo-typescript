import { Action, TaskActions } from './actions';
import { TaskState } from '../types';

export const initialState: TaskState = {
  tasks: [],
  createTaskError: false,
  createTaskComplete: false,
};

export default (
  state = initialState,
  action: Action<TaskActions>
): TaskState => {
  switch (action.type) {
    case TaskActions.CREATE_TASK_SUCCESS:
      return { ...state, createTaskComplete: true };
    case TaskActions.CREATE_TASK_ERROR:
      return { ...state, createTaskError: true };
    default:
      return state;
  }
};
