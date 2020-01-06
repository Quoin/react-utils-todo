import { namespace } from '@quoin/react-utils';

import { ROOT_NAMESPACE } from './constants';

export default (path) => namespace(`${ROOT_NAMESPACE}.${path}`);
