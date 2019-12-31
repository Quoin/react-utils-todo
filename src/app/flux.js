import { fromJS } from 'immutable';

import {
    concatenateReducers,
    namespacedActions,
    setSubstateAttribute
} from '@quoin/react-utils';

import { ATTRIBUTES } from './constants';
import namespace from './namespace';

const actions = namespacedActions(namespace, [
    'INIT_TYPE'
]);

export const reducers = concatenateReducers([{
    actions: [ actions.INIT_TYPE ],
    reducer: (state, action) => setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([]))
}]);

export const selectors = Object.freeze({
});

export const INIT_TYPE = actions.INIT_TYPE;
