import { expect, verifyProperties } from '@quoin/react-test-utils';

import * as moduleToTest from './constants';

describe(`src/constants`, () => {
    it(`exports know properties`, () => {
        const clone = { ...moduleToTest };
        verifyProperties(clone, null, [ 'ROOT_NAMESPACE' ]);
        expect(clone).to.be.empty();
    });
});
