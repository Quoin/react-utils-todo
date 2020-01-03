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

import { ATTRIBUTES } from './constants';
import namespace from './namespace';
import { ItemAdderRecord } from './records';

const actions = namespacedActions(namespace, [
    'SET'
]);

const actionCreators = Object.freeze({
    reset: () => actionCreator(actions.SET, { value: '' }),
    set: (value) => actionCreator(actions.SET, { value })
});

export const orchestrators = Object.freeze({
    set: (dispatch, value) => dispatch(actionCreators.set(value)),
    submit: (dispatch, add, value) => batch(() => {
        add(value);
        dispatch(actionCreators.reset());
    })
});

export const reducers = concatenateReducers([{
    actions: [ INIT_TYPE ],
    reducer: (state, action) => setSubstate(state, namespace, ItemAdderRecord())
}, {
    actions: [ actions.SET ],
    reducer: (state, action) => setSubstateAttribute(state, namespace, ATTRIBUTES.VALUE, action.payload.value)
}]);

export const selectors = Object.freeze({
    value: (state) => getSubstateAttribute(state, namespace, ATTRIBUTES.VALUE, '')
});
