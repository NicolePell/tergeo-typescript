import { Task } from '../types';

export enum TaskResponseResult {
  success = 'success',
  error = 'error',
}

export default {
  createTask: async (task: Task) => {},
}

