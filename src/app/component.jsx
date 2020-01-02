import {
    Col,
    Grid,
    PageHeader,
    Row
} from 'react-bootstrap';

import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

import ItemAdder from './../item-adder';
import Tasks from './../tasks';

import { NAME } from './constants';

const Component = (props) => {
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

Component.propsTypes = {
    add: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};

export default errorBoundary(Component);
