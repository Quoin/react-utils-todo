import { fromJS } from 'immutable';

import {
    actionCreator,
    concatenateReducers,
    getSubstateAttribute,
    INIT_TYPE,
    namespacedActions,
    setSubstate,
    setSubstateAttribute
} from '@quoin/react-utils';

import { ATTRIBUTES } from './../constants';
import { App as AppRecord, Task as TaskRecord } from './../records';

import namespace from './namespace';

const actions = namespacedActions(namespace, [
    'ADD',
    'COMPLETE',
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
    actions: [ INIT_TYPE ],
    reducer: (state, action) => setSubstate(state, namespace, AppRecord())
}, {
    actions: [ actions.ADD ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS);
        const newTasks = tasks.concat(fromJS([ new TaskRecord({
            value: action.payload.value,
            created: Date.now()
        }) ]));
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}, {
    actions: [ actions.COMPLETE ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS);
        const newTasks = tasks.update(action.payload.index, (task) => task.set('completed', Date.now()));
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}, {
    actions: [ actions.REMOVE ],
    reducer: (state, action) => {
        const tasks = getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS);
        const newTasks = tasks.update(action.payload.index, (task) => task.set('removed', Date.now()));
        return setSubstateAttribute(state, namespace, ATTRIBUTES.TASKS, newTasks);
    }
}]);

export const selectors = Object.freeze({
    tasks: (state) => getSubstateAttribute(state, namespace, ATTRIBUTES.TASKS)
});
