import fetch, { Response } from 'node-fetch';

import { Task } from '../types';
import config from '../config';

const { tasksUrl } = config;

export enum TaskResponseResult {
  success = 'success',
  error = 'error',
}

export default {
  createTask: async (task: Task) => {
    try {
      const response: Response = await fetch(`${tasksUrl}`, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'content-type': 'application/json' },
      });

      if (response.status !== 201) {
        return {
          result: TaskResponseResult.error,
          error: { message: response.statusText, code: response.status },
        };
      }

      return { result: TaskResponseResult.success, task };
    } catch (error) {
      return { result: TaskResponseResult.error };
    }
  },
};
