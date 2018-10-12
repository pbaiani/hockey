
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ClearIcon from '@material-ui/icons/Clear';

import validate from './validate';
import submit from './submit';


const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );

const renderCheckbox = ({ input, label }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

const renderSelectField = (
    { input, label, meta: { touched, error }, children, ...custom },
) => (
        <SelectField
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom}
        />
    );



const ChildComponent = (props) => {
    console.log('called from form_signup:', props.getCurrentState());

  return (
  <div>
        <h1>Child Component</h1>
    </div>
    )

  }


 
const SignupForm = props => {

   const { handleSubmit, pristine, reset, submitting} = props;

   console.log('Form Signup:  ', props.getCurrentState());

    return (
 <div>
            <form onSubmit={handleSubmit(submit)}>
            <div>
                <Field
                    name="firstName"
                    component={renderTextField}
                    label="First Name"
                />
            </div>
            <div>
                <Field name="lastName" component={renderTextField} label="Last Name" />
            </div>
            <div>
                <Field name="email" component={renderTextField} label="Email" />
            </div>
            <div style={{display:'none'}}>
                <Field name="sex" component={renderRadioGroup}>
                    <RadioButton value="male" label="male" />
                    <RadioButton value="female" label="female" />
                </Field>
            </div>
            <div style={{display:'none'}}>
                <Field
                    name="favoriteColor"
                    component={renderSelectField}
                    label="Favorite Color"
                >
                    <MenuItem value="ff0000" primaryText="Red" />
                    <MenuItem value="00ff00" primaryText="Green" />
                    <MenuItem value="0000ff" primaryText="Blue" />
                </Field>
            </div>
            <div style={{display:'none'}}>
                <Field name="employed" component={renderCheckbox} label="Employed" />
            </div>
            <div style={{display:'none'}}>
                <Field
                    name="notes"
                    component={renderTextField}
                    label="Notes"
                    multiLine={true}
                    rows={2}
                />
            </div>
            <div>
               <Field type="password"  name="password" component={renderTextField} label="Password" />
            </div>
            <div>
                <Field type='password' name="password2" component={renderTextField} label="Re-Type Password" />
            </div>

            <div style={{textAlign:'right'}}>
                    <Button variant="contained"
                     color="primary"
                    type="submit"
                    size="small"
                    disabled={pristine || submitting}
                    >
                     Submit
                     <SendIcon
                     size="small"
                     >send</SendIcon>
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;
              
                <Button
                 variant="contained" 
                 type="button"
                 size="small"
                 color="secondary"
                  disabled={pristine || submitting}
                   onClick={reset}>
                 Clear
                 <ClearIcon
                    size="small"
                 >clear</ClearIcon>
        </Button>
            </div>
        </form>
   </div>
    );
};


export default reduxForm({
    form: 'Signup', // a unique identifier for this form
    validate,
    submit,
  //  handleSubmit,
  })(SignupForm);


