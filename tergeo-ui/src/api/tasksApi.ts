import fetch from 'node-fetch';

import { Task } from '../types';
import config from '../config';

const { tasksUrl } = config;

export enum TaskResponseResult {
  success = 'success',
  error = 'error',
}

export default {
  createTask: async (task: Task) => {
    await fetch(`${tasksUrl}`, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { 'content-type': 'application/json' },
    });

    return { result: TaskResponseResult.success };
  },
};
