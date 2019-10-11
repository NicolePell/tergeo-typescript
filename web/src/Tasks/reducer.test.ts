import reducer, { initialState, TaskState } from './reducer';
import { TaskActions } from './actions';
import { Task } from '../types';

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

  describe('fetchAllTasks', () => {
    it('sets fetchAllTasksComplete to true on FETCH_ALL_TASKS_SUCCESS action', () => {
      const state: TaskState = {
        ...initialState,
        tasks: [],
      };

      const tasks: Task[] = [
        { description: 'Call Dumbledore', completed: false },
        { description: 'Buy new cauldron', completed: false },
      ];

      const nextState = reducer(state, {
        type: TaskActions.FETCH_ALL_TASKS_SUCCESS,
        payload: tasks,
      });
      expect(nextState.tasks).toEqual(tasks);
    });
  });
});
