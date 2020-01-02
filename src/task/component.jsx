import {
    Col,
    Glyphicon,
    Row
} from 'react-bootstrap';

import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

import { NAME } from './constants';

const Component = (props) => {
    return (
        <div className="quoin-react-utils-todo-task">
          <Row>
            <Col className="value" xs={8}>
              {props.task.value}
            </Col>
            <Col className="actions" xs={4}>
              <Glyphicon glyph="trash" onClick={() => props.task.remove()} />
            </Col>
          </Row>
        </div>
    );
};

Component.propsTypes = {
    task: PropTypes.object.isRequired
};

Component.displayName = NAME;

export default errorBoundary(Component);
