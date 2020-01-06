import { expect } from '@quoin/react-test-utils';

import moduleToTest from './reducers';

describe(`src/reducers`, () => {
    it(`exports a function with 2 params`, () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(2);
    });
});
