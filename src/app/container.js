import {
    boundComponent,
    useDispatch,
    useSelector
} from '@quoin/react-utils';

import Component from './component';
import { orchestrators, selectors } from './flux';

const getComponentProps = (props) => {
    const dispatch = useDispatch();

    return {
        add: (value) => orchestrators.add(dispatch, value),
        tasks: useSelector(selectors.tasks)
    };
};

const propsTypes = {};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propsTypes, defaultProps);
