import { fromJS } from 'immutable';

import {
    actionCreator,
    concatenateReducers,
    getSubstateAttribute,
    namespacedActions,
    setSubstateAttribute
} from '@quoin/react-utils';

import { ATTRIBUTES } from './constants';
import namespace from './namespace';

const actions = namespacedActions(namespace, [
    'ADD',
    'INIT_TYPE'
]);

const actionCreators = Object.freeze({
    add: (value) => actionCreator(actions.ADD, {
        value,
        created: Date.now()
    })
});

export const orchestrators = Object.freeze({
    add: (dispatch, value) => dispatch(actionCreators.add(value))
});

export const reducers = concatenateReducers([{
    actions: [ actions.INIT_TYPE ],
    reducer: (state, action) => setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([]))
}, {
    actions: [ actions.ADD ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS);
        const newTasks = tasks.concat(fromJS([ action.payload ]));
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}]);

export const selectors = Object.freeze({
    tasks: (state) => getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([])).toJS()
});

export const INIT_TYPE = actions.INIT_TYPE;
