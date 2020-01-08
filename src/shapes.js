import {
    ImmutablePropTypes,
    PropTypes
} from '@quoin/react-utils';

import { TaskRecord } from './records';

export const task = PropTypes.instanceOf(TaskRecord);

export const tasks = ImmutablePropTypes.listOf(TaskRecord);
