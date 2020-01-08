import {
    ImmutablePropTypes,
    PropTypes
} from '@quoin/react-utils';

import { Task as TaskRecord } from './records';

export const task = PropTypes.instanceOf(TaskRecord);

export const tasks = ImmutablePropTypes.listOf(TaskRecord);
