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
        .map((task, index) => task
            .set('complete', () => orchestrators.complete(dispatch, index))
            .set('remove', () => orchestrators.remove(dispatch, index))
        );

    return {
        add: (value) => orchestrators.add(dispatch, value),
        tasks
    };
};

const propTypes = {};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propTypes, defaultProps);
