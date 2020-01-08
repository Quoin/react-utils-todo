import { Map } from 'immutable';

import {
    actionCreator,
    batch,
    concatenateReducers,
    getSubstateAttribute,
    INIT_TYPE,
    namespacedActions,
    setSubstate,
    setSubstateAttribute
} from '@quoin/react-utils';

import IAction from '../iaction';

import { ATTRIBUTES } from './constants';
import namespace from './namespace';
import { ItemAdderRecord } from './records';

const actions = namespacedActions(namespace, [
    'SET'
]);

const actionCreators = Object.freeze({
    reset: () => actionCreator(actions.SET, { value: '' }),
    set: (value: string) => actionCreator(actions.SET, { value })
});

export const orchestrators = Object.freeze({
    set: (dispatch: Function, value: string) => dispatch(actionCreators.set(value)),
    submit: (dispatch: Function, add: Function, value: string) => batch(() => {
        add(value);
        dispatch(actionCreators.reset());
    })
});

export const reducers = concatenateReducers([{
    actions: [ INIT_TYPE ],
    reducer: (state: any, action: IAction) => setSubstate(state, namespace, ItemAdderRecord())
}, {
    actions: [ actions.SET ],
    reducer: (state: any, action: IAction) => setSubstateAttribute(state, namespace, ATTRIBUTES.VALUE, action.payload.value)
}]);

export const selectors = Object.freeze({
    value: (state: any) => getSubstateAttribute(state, namespace, ATTRIBUTES.VALUE, '')
});
