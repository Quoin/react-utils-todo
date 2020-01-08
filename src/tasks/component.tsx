import {
    errorBoundary
} from '@quoin/react-utils';

import { Task as TaskRecord } from './../records';
import { tasks as TasksShape } from './../shapes';
import Task from './../task';

import { NAME } from './constants';

const Component = (props) => {
    const tasks = props.tasks.map((task, index) => {
        if (task.removed) {
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

Component.propTypes = {
    tasks: TasksShape
};

export default errorBoundary(Component);
