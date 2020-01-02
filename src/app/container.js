import {
    boundComponent,
    useDispatch,
    useSelector
} from '@quoin/react-utils';

import Component from './component';
import { orchestrators, selectors } from './flux';

const getComponentProps = (props) => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectors.tasks)
        .filter((task) => !task.deleted)
    ;
    tasks.forEach((task, index) => {
        task.remove = () => orchestrators.remove(dispatch, index);
    });

    return {
        add: (value) => orchestrators.add(dispatch, value),
        tasks
    };
};

const propsTypes = {};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propsTypes, defaultProps);
