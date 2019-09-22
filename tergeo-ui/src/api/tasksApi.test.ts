import tasksApi, { TaskResponseResult } from './tasksApi';
import { Task } from '../types';
import config from '../config';

jest.mock('node-fetch');
import fetch from 'node-fetch';

// @ts-ignore
const mockFetch = fetch as jest.Mock;
const { tasksUrl } = config;

describe('create', () => {
  it('calls tasksAPI with expected body and returns success result if request is ok', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 201,
      statusText: 'Created',
      task,
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
      task,
    });
  });

  it('returns error result if request returns a not ok response', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
      task: {},
    });

    const response = await tasksApi.createTask(task);

    expect(response).toEqual({
      result: TaskResponseResult.error,
      error: {
        message: 'Bad Request',
        code: 400,
      },
    });
  });

  it('returns error result if request fails', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    mockFetch.mockRejectedValueOnce({});

    const response = await tasksApi.createTask(task);

    expect(response).toEqual({
      result: TaskResponseResult.error,
    });
  });
});
