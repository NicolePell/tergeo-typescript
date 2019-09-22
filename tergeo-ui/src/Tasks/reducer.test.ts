import reducer, { initialState } from './reducer';
import { TaskActions } from './actions';

describe('tasks reducer', () => {
  it('sets initial state', () => {
    const state = undefined;
    const action = { type: '' as TaskActions };

    const reducedState = reducer(state, action);

    expect(reducedState).toEqual({
      createTaskError: false,
      createTaskComplete: false,
      tasks: [],
    });
  });

  describe('createTask', () => {
    it('sets createTaskError to true on CREATE_TASK_ERROR action', () => {
      const state = {
        ...initialState,
        createTaskError: false,
      };

      const nextState = reducer(state, {
        type: TaskActions.CREATE_TASK_ERROR,
      });
      expect(nextState.createTaskError).toEqual(true);
    });

    it('sets createTaskComplete to true on CREATE_TASK_SUCCESS action', () => {
      const state = {
        ...initialState,
        createTaskError: false,
        createTaskComplete: false,
      };

      const nextState = reducer(state, {
        type: TaskActions.CREATE_TASK_SUCCESS,
      });
      expect(nextState.createTaskComplete).toEqual(true);
    });
  });
});
