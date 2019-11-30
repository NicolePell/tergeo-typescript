import fetch from 'node-fetch';

import { Task, TaskDetails } from '../types';
import config from '../config';

const { tasksUrl } = config;

export enum TaskResponseResult {
  success = 'success',
  error = 'error',
}

export type ErrorResult = {
  message: string;
  code: number;
};

export type TaskResponse = {
  result: TaskResponseResult;
  tasks?: Task[];
  task?: Task;
  error?: ErrorResult;
};

export const saveTask = async (task: TaskDetails): Promise<TaskResponse> => {
  try {
    const response = await fetch(`${tasksUrl}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: { 'content-type': 'application/json' },
    });

    if (!response.ok) {
      return {
        result: TaskResponseResult.error,
      };
    }

    return {
      result: TaskResponseResult.success,
      task: await response.json(),
    };
  } catch (error) {
    return { result: TaskResponseResult.error };
  }
};

export const fetchAllTasks = async (): Promise<TaskResponse> => {
  try {
    const response = await fetch(`${tasksUrl}`, { method: 'GET' });
    const tasks = await response.json();

    return {
      result: TaskResponseResult.success,
      tasks,
    };
  } catch (error) {
    return { result: TaskResponseResult.error };
  }
};
