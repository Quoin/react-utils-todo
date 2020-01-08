import { namespace } from '@quoin/react-utils';

import { ROOT_NAMESPACE } from './constants';

export default (path: string) => namespace(`${ROOT_NAMESPACE}.${path}`);
