import { fromJS } from 'immutable';

import {
    createStore,
    Provider,
    render
} from '@quoin/react-utils';
import '@quoin/react-utils-bs3';

import App from './app';
import reducers from './reducers';

const store = createStore(reducers, fromJS({}), [], process.env.NODE_ENV === 'development');

const placeholder = document.querySelector('#react-app-placeholder');
if (placeholder) {
    const ReactApp = <Provider store={store}><App /></Provider>;
    render(ReactApp, placeholder);
}
