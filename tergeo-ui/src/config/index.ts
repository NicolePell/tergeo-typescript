export default require('./' + (process.env.NODE_ENV || 'local')).default;

export type Config = {
  tasksUrl: string;
};
