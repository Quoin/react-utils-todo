import { Record } from 'immutable';

export interface ITask extends RecordFactory {
  value: string;
  created: number;
  complete?: Function;
  completed?: number;
  remove?: Function;
  removed?: number;
}

const Factory = Record<ITask>({
  value: '',
  created: 0,
  complete: null,
  completed: 0,
  remove: null,
  removed: 0
});

export default class Task extends Factory implements ITask {
  value: string;
  created: number;
  complete: Function;
  completed: number;
  remove: Function;
  removed: number;
}
