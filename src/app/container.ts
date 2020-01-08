import {
    boundComponent,
    useDispatch,
    useSelector
} from '@quoin/react-utils';

import { ITask } from './../records';

import Component from './component';
import { orchestrators, selectors } from './flux';

const getComponentProps = (props: any) => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectors.tasks)
    .map((task: ITask, index: number) => task
      .set('complete', () => orchestrators.complete(dispatch, index))
      .set('remove', () => orchestrators.remove(dispatch, index))
    );

  return {
    add: (value: string) => orchestrators.add(dispatch, value),
    tasks
  };
};

const propTypes = {};

const defaultProps = {};

export default boundComponent(Component, getComponentProps, propTypes, defaultProps);