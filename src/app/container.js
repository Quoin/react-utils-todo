import {
    boundComponent,
    useDispatch,
    useSelector
} from '@quoin/react-utils';

import Component from './component';
import { orchestrators, selectors } from './flux';

const getComponentProps = (props) => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectors.tasks);
    tasks.forEach((task, index) => {
        task.remove = () => orchestrators.remove(dispatch, index);
        task.complete = () => orchestrators.complete(dispatch, index);
    });

    return {
        add: (value) => orchestrators.add(dispatch, value),
        tasks
    };
};

const propTypes = {};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propTypes, defaultProps);
