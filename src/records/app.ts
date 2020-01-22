import { List, Record } from 'immutable';

import { ATTRIBUTES } from './../constants';

import Task from './task';

export interface IApp {
    [ATTRIBUTES.TASKS]: List<Task>;
}

export default Record(
  {
      [ATTRIBUTES.TASKS]: List()
  },
  "App"
);
