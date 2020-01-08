import {
  boundComponent,
  PropTypes,
  useDispatch,
  useSelector
} from '@quoin/react-utils';

import Component from './component';
import {
  orchestrators,
  selectors
} from './flux';

interface Props {
  add: Function
}

const getComponentProps = (props: Props) => {
  const dispatch = useDispatch();

  const value = useSelector(selectors.value);

  return {
    set: (value: string) => orchestrators.set(dispatch, value),
    submit: () => orchestrators.submit(dispatch, props.add, value),
    value
  };
};

const propTypes = {
  add: PropTypes.func.isRequired
};

export default boundComponent(Component, getComponentProps, propTypes);
