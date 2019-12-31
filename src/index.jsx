import { fromJS } from 'immutable';

import {
    createStore,
    Provider,
    render
} from '@quoin/react-utils';
import '@quoin/react-utils-bs3';

import App, { INIT_TYPE, reducers } from './app';

const store = createStore(reducers, fromJS({}), [], process.env.NODE_ENV === 'development', INIT_TYPE);

const placeholder = document.querySelector('#react-app-placeholder');
if (placeholder) {
    const ReactApp = <Provider store={store}><App /></Provider>;
    render(ReactApp, placeholder);
}
