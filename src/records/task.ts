import { Record } from 'immutable';

export interface ITask {
  value: number;
  created: number;
  complete?: Function;
  completed?: number;
  remove?: Function;
  removed?: number;
}

export default Record<Interface>({
  value: '',
  created: null,
  complete: null,
  completed: null,
  remove: null,
  removed: null
}, "Task");

