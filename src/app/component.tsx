import { List } from 'immutable';
import {
    Col,
    Grid,
    PageHeader,
    Row
} from 'react-bootstrap';

import {
    errorBoundary,
    PropTypes,
    React
} from '@quoin/react-utils';

import { ATTRIBUTES } from './../constants';
import ItemAdder from './../item-adder';
import { ITask } from './../records';
import { tasks as tasksShape } from './../shapes';
import Tasks from './../tasks';

import { NAME } from './constants';

interface Props {
  add: Function;
  [ATTRIBUTES.TASKS]: List<ITask>;
}

const Component = (props: Props) => {
    return (
        <Grid>
          <Row>
            <Col xs={12}>
              <PageHeader>Quoin react-utils TODO list</PageHeader>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <p>
                This is a sample project using the
                {' '}
                <a href="https://github.com/Quoin/react-utils">@quoin/react-utils</a>
                {' '}
                library.
              </p>

              <p>
                Get the source at
                {' '}
                <a href="https://github.com/Quoin/react-utils-todo">https://github.com/Quoin/react-utils-todo</a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ItemAdder add={props.add} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Tasks tasks={props.tasks} />
            </Col>
          </Row>
        </Grid>
    );
};

Component.displayName = NAME;

Component.propTypes = {
    add: PropTypes.func.isRequired,
    tasks: tasksShape
};

export default errorBoundary(Component);
