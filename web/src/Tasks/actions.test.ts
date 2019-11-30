import { TaskDetails } from '../types';
import { createTaskAction, fetchAllTasksAction } from './actions';

jest.mock('../api/tasksApi');
import { saveTask, fetchAllTasks, TaskResponseResult } from '../api/tasksApi';

describe('createTask', () => {
  it('dispatches a start event, an api request, and a success event', async () => {
    const mockDispatch = jest.fn();
    const task: TaskDetails = {
      description: 'Call Dumbledore',
      completed: false,
    };

    (saveTask as jest.Mock).mockResolvedValue({
      result: TaskResponseResult.success,
      task,
    });

    await createTaskAction(task)(mockDispatch);

    expect(mockDispatch.mock.calls).toEqual([
      [{ type: 'CREATE_TASK_START' }],
      [{ type: 'CREATE_TASK_SUCCESS' }],
    ]);
    expect(saveTask).toBeCalledWith(task);
  });

  it('dispatches an error event if api request was not ok', async () => {
    const mockDispatch = jest.fn();
    const task: TaskDetails = {
      description: 'Call Dumbledore',
      completed: false,
    };
    (saveTask as jest.Mock).mockResolvedValueOnce({
      result: TaskResponseResult.error,
    });

    await createTaskAction(task)(mockDispatch);

    expect(mockDispatch.mock.calls).toEqual([
      [{ type: 'CREATE_TASK_START' }],
      [{ type: 'CREATE_TASK_ERROR' }],
    ]);
  });
});

describe('fetchTasks', () => {
  it('dispatches a start event, an api request, and a complete event', async () => {
    const mockDispatch = jest.fn();
    const tasks: TaskDetails[] = [
      { description: 'Call Dumbledore', completed: false },
      { description: 'Buy new cauldron', completed: false },
    ];

    (fetchAllTasks as jest.Mock).mockResolvedValueOnce({
      result: TaskResponseResult.success,
      tasks,
    });

    await fetchAllTasksAction()(mockDispatch);

    expect(mockDispatch.mock.calls).toEqual([
      [{ type: 'FETCH_ALL_TASKS_START' }],
      [{ type: 'FETCH_ALL_TASKS_SUCCESS', payload: tasks }],
    ]);
    expect(fetchAllTasks).toBeCalled();
  });
});
