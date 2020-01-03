import {
    PropTypes
} from '@quoin/react-utils';

export const TASK = PropTypes.shape({
    complete: PropTypes.func.isRequired,
    completed: PropTypes.number,
    created: PropTypes.number.isRequired,
    deleted: PropTypes.number,
    remove: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
});

export const TASKS = PropTypes.arrayOf(TASK);
