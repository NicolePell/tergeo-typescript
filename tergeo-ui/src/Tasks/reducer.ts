import { Action, TaskActions } from './actions';
import { TaskState } from '../types';

const initialState: TaskState = {
  tasks: [],
};

export default (
  state = initialState,
  action: Action<TaskActions>
): TaskState => {
  switch (action.type) {
    case TaskActions.CREATE_TASK_START:
      return {
        tasks: [...state.tasks],
      };
    default:
      return state;
  }
};
