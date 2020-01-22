import { Record } from 'immutable';

export interface ITask extends Record<string, any> {
  value: string;
  created: number;
  complete?: () => void;
  completed?: number;
  removeTask?: () => void;
  removed?: number;
}

const Factory = Record({
  value: '',
  created: 0,
  complete: () => {},
  completed: 0,
  removeTask: () => {},
  removed: 0
}, "TaskFactory");

export default class Task extends Factory implements ITask {
  value: string;
  created: number;
  complete: () => void;
  completed: number;
  removeTask: () => void;
  removed: number;
}
