import {
    boundComponent,
    useDispatch,
    useSelector
} from '@quoin/react-utils';

import Component from './component';
import {
    orchestrators,
    selectors
} from './flux';

const getComponentProps = (props) => {
    return {
        ...props
    };
};

const propsTypes = {};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propsTypes, defaultProps);
