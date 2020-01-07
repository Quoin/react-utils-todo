import { fromJS, Record } from 'immutable';

import { ATTRIBUTES } from './constants';

export const AppRecord = Record(
    {
        [ATTRIBUTES.TASKS]: fromJS([])
    },
    'AppRecord'
);

export const TaskRecord = Record(
    {
        value: '',
        created: null,
        complete: null,
        completed: null,
        remove: null,
        removed: null
    },
    'TaskRecord'
);
