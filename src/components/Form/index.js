import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export function InputComponentWrapper({ children }) {
  return <Form.Field>{children}</Form.Field>;
}

InputComponentWrapper.propTypes = {
  children: PropTypes.element.isRequired
};

export function Input(props) {
  const { name, placeholder, type } = props;

  return (
    <InputComponentWrapper>
      <input
        name={name}
        className='input'
        type={type}
        placeholder={placeholder}
      />
    </InputComponentWrapper>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default {};
