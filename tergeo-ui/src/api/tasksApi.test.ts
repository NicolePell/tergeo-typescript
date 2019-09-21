import fetchMock from 'fetch-mock';

import tasksApi, { TaskResponseResult } from './tasksApi';
import { Task } from '../types';
import config from '../config';

jest.mock('node-fetch');
import fetch from 'node-fetch';

const { tasksUrl } = config;

describe('create', () => {
  it('calls taskService with task', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    fetchMock.mock(`${tasksUrl}`, {
      status: 201,
      statusText: 'Created',
      body: { description: 'Call Dumbledore', completed: false, id: 1 },
    });

    const response = await tasksApi.createTask(task);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(`${tasksUrl}`, {
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
