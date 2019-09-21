import fetchMock from 'fetch-mock';

import tasksApi, { TaskResponseResult } from './tasksApi';
import { Task } from '../types';

jest.mock('node-fetch');
import fetch from 'node-fetch';

describe('create', () => {
  it('calls taskService with task', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    fetchMock.mock(`http://localhost:4000/tasks`, {
      status: 201,
      statusText: 'Created',
      body: { description: 'Call Dumbledore', completed: false, id: 1 },
    });

    const response = await tasksApi.createTask(task);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(`http://localhost:4000/tasks`, {
      body: JSON.stringify(task),
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
    });
    expect(response).toEqual({
      result: TaskResponseResult.success,
    });
  });
});
