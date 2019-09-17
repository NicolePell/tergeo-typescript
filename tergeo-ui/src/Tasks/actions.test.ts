import { Task } from '../types';
import { createTask } from './actions';

jest.mock('../api/tasksApi');
import tasksApi from '../api/tasksApi';

describe('createTask', () => {
  it('dispatches a create event, an api request, and a success event', async () => {
    const mockDispatch = jest.fn();
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };
    (tasksApi.createTask as jest.Mock).mockResolvedValueOnce({});

    await createTask(task)(mockDispatch);

    expect(mockDispatch.mock.calls).toEqual([
      [{ type: 'CREATE_TASK_START' }],
      [{ type: 'CREATE_TASK_SUCCESS' }],
    ]);
    expect(tasksApi.createTask).toBeCalledWith(task);
  });
});
