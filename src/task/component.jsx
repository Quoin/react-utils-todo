import {
    Col,
    Glyphicon,
    Row
} from 'react-bootstrap';

import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

import { TaskRecord } from './../records';

import { NAME } from './constants';

const Component = (props) => {
    return (
        <div className="quoin-react-utils-todo-task">
          <Row>
            <Col className="value" xs={8}>
              {props.task.value}
            </Col>
            <Col className="actions" xs={4}>
              <Glyphicon glyph="ok" onClick={() => props.task.complete()} />
              <Glyphicon glyph="trash" onClick={() => props.task.remove()} />
            </Col>
          </Row>
        </div>
    );
};

Component.propTypes = {
    task: PropTypes.instanceOf(TaskRecord).isRequired
};

Component.displayName = NAME;

export default errorBoundary(Component);
