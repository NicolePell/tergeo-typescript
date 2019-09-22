import { Task } from '../types';
import { createTask } from './actions';

jest.mock('../api/tasksApi');
import tasksApi, { TaskResponseResult } from '../api/tasksApi';

describe('createTask', () => {
  it('dispatches a start event, an api request, and a success event', async () => {
    const mockDispatch = jest.fn();
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };
    (tasksApi.createTask as jest.Mock).mockResolvedValueOnce({ result: TaskResponseResult.success });

    await createTask(task)(mockDispatch);

    expect(mockDispatch.mock.calls).toEqual([
      [{ type: 'CREATE_TASK_START' }],
      [{ type: 'CREATE_TASK_SUCCESS' }],
    ]);
    expect(tasksApi.createTask).toBeCalledWith(task);
  });

  it('dispatches an error event if api request was not ok', async () => {
    const mockDispatch = jest.fn();
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };
    (tasksApi.createTask as jest.Mock).mockResolvedValueOnce({ result: TaskResponseResult.error });

    await createTask(task)(mockDispatch);

    expect(mockDispatch.mock.calls).toEqual([
      [{ type: 'CREATE_TASK_START' }],
      [{ type: 'CREATE_TASK_ERROR' }],
    ]);
  });
});
