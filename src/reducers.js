import {
    concatenateReducers
} from '@quoin/react-utils';

import { reducers as appReducers } from './app';
import { reducers as itemAdderReducer } from './item-adder';

export default concatenateReducers([
    appReducers,
    itemAdderReducer
]);
