import {
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup
} from 'react-bootstrap';

import {
  errorBoundary,
  PropTypes,
  React
} from '@quoin/react-utils';

interface Props {
  set: Function;
  submit: Function;
  value?: string;
}

const Component = (props:Props) => {
  const disabled = !Boolean(props.value);

  const formSubmit = (e:any) => {
    e.preventDefault();
    if (props.value) {
      props.submit();
    }
  };

  return (
    <Form className="quoin-react-utils-todo-item-adder" onSubmit={formSubmit}>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" value={props.value} onChange={(e:any) => props.set(e.target.value)} />
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
