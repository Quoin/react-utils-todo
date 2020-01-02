import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

import { NAME } from './constants';

const Component = (props) => {
    const tasks = props.tasks.map((task, index) => <div key={index}>{task.value}</div>);

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
