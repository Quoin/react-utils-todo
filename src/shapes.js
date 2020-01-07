import {
    PropTypes
} from '@quoin/react-utils';

import { TaskRecord } from './records';

export const TASK = PropTypes.instanceOf(TaskRecord);

export const TASKS = PropTypes.arrayOf(TASK);
