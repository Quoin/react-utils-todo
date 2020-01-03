import {
    Button,
    Form,
    FormControl,
    FormGroup,
    InputGroup
} from 'react-bootstrap';

import {
    errorBoundary,
    PropTypes
} from '@quoin/react-utils';

const Component = (props) => {
    const disabled = !Boolean(props.value);

    const formSubmit = (e) => {
        e.preventDefault();
        if (props.value) {
            props.submit();
        }
    };

    return (
        <Form className="quoin-react-utils-todo-item-adder" onSubmit={formSubmit}>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" value={props.value} onChange={(e) => props.set(e.target.value)} />
              <InputGroup.Button>
                <Button onClick={() => props.submit()} disabled={disabled}>Add</Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>
    );
};

Component.propTypes = {
    set: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    value: PropTypes.string
};

export default errorBoundary(Component);
