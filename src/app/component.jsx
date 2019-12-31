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

import { NAME } from './constants';

const Component = (props) => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <PageHeader>Quoin react-utils TODO list</PageHeader>
                </Col>
            </Row>
        </Grid>
    );
};

Component.displayName = NAME;

Component.propsTypes = {
};

export default errorBoundary(Component);
