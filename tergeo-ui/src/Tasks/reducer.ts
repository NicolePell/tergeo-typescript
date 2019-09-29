import { Action, TaskActions } from './actions';
import { State } from '../types';

export const initialState: State = {
  tasks: [],
  createTaskError: false,
  createTaskComplete: false,
};

export default (
  state = initialState,
  action: Action<TaskActions>
): State => {
  switch (action.type) {
    case TaskActions.CREATE_TASK_SUCCESS:
      return { ...state, createTaskComplete: true };
    case TaskActions.CREATE_TASK_ERROR:
      return { ...state, createTaskError: true };
    default:
      return state;
  }
};
