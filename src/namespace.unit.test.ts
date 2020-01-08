import { expect } from '@quoin/react-test-utils';

import { ROOT_NAMESPACE } from './constants';
import moduleToTest from './namespace';

describe(`src/namespace`, () => {
    it(`exports a function with 1 param`, () => {
        expect(moduleToTest).to.be.a('function').and.to.have.lengthOf(1);
    });

    it(`returns a known value`, () => {
        const value = moduleToTest(`foo`);
        expect(value).to.equal(`${ROOT_NAMESPACE}.FOO`);
    });
});
