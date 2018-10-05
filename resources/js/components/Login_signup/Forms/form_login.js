
import React from 'react';
import { Field, reduxForm, FormName } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ClearIcon from '@material-ui/icons/Clear';

import asyncValidate from './asyncValidate';
import validate from './validate';
import submit from './submit';


const renderTextField = (
    { input, label, meta: { touched, error}, ...custom },
) => (
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );


const LoginForm = props => {
 
 
    const { handleSubmit, pristine, submitting} = props;
    return (

<div>
        <form name="login" onSubmit={handleSubmit(submit)}>
              
        
         
            <div>
                <Field name="email" component={renderTextField} label="Email" />

           </div>
           
              
            <div>
               <Field type="password"  name="password" component={renderTextField} label="Password" />
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
                         
            </div>
        </form>
   </div>
    );


};

const mapDispatchToProps = dispatch => ({
    onSubmit: values =>
        alert('hi'),
});



export default reduxForm({
    form: 'Login', // a unique identifier for this form
    validate,
     asyncValidate,
     
})(LoginForm);
