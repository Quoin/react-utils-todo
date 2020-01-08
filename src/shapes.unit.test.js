import {
    verifyProperties
} from '@quoin/react-test-utils';

import * as moduleToTest from './shapes';

describe(`src/shapes`, () => {
    it(`exports known properties`, () => {
        const clone = { ...moduleToTest };
        verifyProperties(clone, null, [
            'task',
            'tasks'
        ]);
    });
});
