import { createTask, fetchAllTasks, TaskResponseResult } from './tasksApi';
import { Task } from '../types';
import config from '../config';

jest.mock('node-fetch');
import fetch from 'node-fetch';

// @ts-ignore
const mockFetch = fetch as jest.Mock;
const { tasksUrl } = config;

describe('create', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('calls tasksAPI with expected body and returns success result if request is ok', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(task),
    });

    const response = await createTask(task);

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

    mockFetch.mockResolvedValueOnce({ ok: false });

    const response = await createTask(task);

    expect(response).toEqual({ result: TaskResponseResult.error });
  });

  it('returns error result if request fails', async () => {
    const task: Task = {
      description: 'Call Dumbledore',
      completed: false,
    };

    mockFetch.mockRejectedValueOnce({});

    const response = await createTask(task);

    expect(response).toEqual({
      result: TaskResponseResult.error,
    });
  });
});

describe('fetchAllTasks', () => {
  it('calls tasksAPI and returns success result and list of tasks if request is ok', async () => {
    const tasks: Task[] = [
      {
        description: 'Call Dumbledore',
        completed: false,
      },
    ];

    (mockFetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(tasks),
    });

    const response = await fetchAllTasks();

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toBeCalledWith(`${tasksUrl}`, {
      method: 'GET',
    });
    expect(response).toEqual({
      result: TaskResponseResult.success,
      tasks,
    });
  });
});
