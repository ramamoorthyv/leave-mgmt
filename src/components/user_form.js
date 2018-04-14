import React from 'react';
import { Field, reduxForm } from 'redux-form';

const UserForm = props => {
  //const { handleSubmit } = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>First Name:</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <br/>
      <button type="submit">Submit</button>     
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(UserForm);
