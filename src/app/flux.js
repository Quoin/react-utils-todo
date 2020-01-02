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
    'COMPLETE',
    'INIT_TYPE',
    'REMOVE'
]);

const actionCreators = Object.freeze({
    add: (value) => actionCreator(actions.ADD, { value }),
    complete: (index) => actionCreator(actions.COMPLETE, { index }),
    remove: (index) => actionCreator(actions.REMOVE, { index })
});

export const orchestrators = Object.freeze({
    add: (dispatch, value) => dispatch(actionCreators.add(value)),
    complete: (dispatch, index) => dispatch(actionCreators.complete(index)),
    remove: (dispatch, index) => dispatch(actionCreators.remove(index))
});

export const reducers = concatenateReducers([{
    actions: [ actions.INIT_TYPE ],
    reducer: (state, action) => setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([]))
}, {
    actions: [ actions.ADD ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([]));
        const newTasks = tasks.concat(fromJS([{
            value: action.payload.value,
            created: Date.now()
        }]));
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}, {
    actions: [ actions.COMPLETE ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([]));
        const task = tasks.get(action.payload.index, fromJS({}));
        const newTask = task.set('completed', Date.now());
        const newTasks = tasks.set(action.payload.index, newTask);
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}, {
    actions: [ actions.REMOVE ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([]));
        const task = tasks.get(action.payload.index, fromJS({}));
        const newTask = task.set('deleted', Date.now());
        const newTasks = tasks.set(action.payload.index, newTask);
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}]);

export const selectors = Object.freeze({
    tasks: (state) => getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, fromJS([])).toJS()
});

export const INIT_TYPE = actions.INIT_TYPE;
