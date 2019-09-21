import fetch from 'node-fetch';

import { Task } from '../types';

export enum TaskResponseResult {
  success = 'success',
  error = 'error',
}

export default {
  createTask: async (task: Task) => {
    await fetch('http://localhost:4000/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: { 'content-type': 'application/json' },
    });

    return { result: TaskResponseResult.success };
  },
};
