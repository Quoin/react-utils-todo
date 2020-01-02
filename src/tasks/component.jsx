import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

import Task from './../task';

import { NAME } from './constants';

const Component = (props) => {
    const tasks = props.tasks.map((task, index) => {
        if (task.deleted) {
            return null;
        } else if (task.completed) {
            return null;
        } else {
            return <Task key={index} task={task} />;
        }
    });

    return (
        <div className="quoin-react-utils-todo-tasks">
          {tasks}
        </div>
    );
};

Component.displayName = NAME;

Component.propsTypes = {
    tasks: PropTypes.array.isRequired
};

export default errorBoundary(Component);
