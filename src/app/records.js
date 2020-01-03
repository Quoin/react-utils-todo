import { fromJS, Record } from 'immutable';

import { ATTRIBUTES } from './constants';

export const AppRecord = Record({
    [ATTRIBUTES.TASKS]: fromJS([])
});

export const TaskRecord = Record({
    value: '',
    created: null,
    completed: null,
    deleted: null
});
