import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import TextField from "material-ui/TextField";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import Checkbox from "material-ui/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import submit from "./validates_and_submits/submit";
import validate from "./validates_and_submits/validate";

import getLeagueInfo from "./ajax/GetLeagueInfo";





class showLeagueDetails extends Component  {
   
   
    constructor(props) {
        super(props);
        //  this.data =  this.getLeagueInfo();
        this.state = {
            data: 
                {
                    name='contis',

                }
            
            ,
        };
  
        this.getLeagueData = this.getLeagueData.bind(this);
    }


getLeagueData()  {
    console.log('data change??' , this.state.data);
    return this.state.data;
  
}


 mapStateToProps(state) {
    console.log('mapstatetoprops:', state)
    return {
        leagueName: state.data.name
    };
}


componentDidMount() {
    const self = this;
    getLeagueInfo(self);
   

}


render() {
    console.log('props from class' , this.state);
    return <LeagueDetailsForm
         {...this.props}
          getLeagueData={this.getLeagueData.bind(this)}
        />

}



}







const renderTextField = ({
    input,
    value,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        value={value}
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

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />
);

const LeagueDetailsForm = props => {
    const { handleSubmit, pristine, reset, submitting, load } = props;
    console.log('league stuff' , props.getLeagueData);
    return (
              <div>
                <form 
                    onSubmit={handleSubmit(submit)}
                >
                    <div>
                        <Field
                                              
                           name="leagueName"
                            component={renderTextField}
                            label="League Name"
                                  
                        ></Field>
                    </div>
                              
                </form>
            </div>
    );
};


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()

/*
showLeagueDetails = reduxForm({
    enableReinitialize: true,
    mapStateToProps,
    form: "LeagueForm", // a unique identifier for this form
    initialValues: {
        
    }
})(showLeagueDetails);

*/
showLeagueDetails = connect(
    mapStateToProps,
      

    )(showLeagueDetails);




export default reduxForm({
    form: "cunt",    // a unique name for this form
    initialValues: {
      

    },


})(showLeagueDetails);


// You have to connect() to any reducers that you wish to connect to yourself

/*
showLeagueDetails = connect(
    state => ({
        initialValues: {
            leagueName: "cunt"
        }
    }),
 

    // bind account loading action creator
)(showLeagueDetails);




export default showLeagueDetails;


*/



/*



export default reduxForm({
   
    initialValues: {
    leagueName: 'fuck you'

},

    form: "LeagueDetails", // a unique identifier for this form
    validate,
    submit
    //  handleSubmit,
})(showLeagueDetails);


*/