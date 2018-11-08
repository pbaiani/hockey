// Helper styles for demo
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

const Form = props => (
       <div className="app">
          <Formik
        
            initialValues={{ 
                 name: props.league.name
            
            
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .email()
                    .required("Required")
            })}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                } = props;
             
                return (
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                             fullWidth
                            data-texttype='Text'
                        />
                        {errors.name &&
                            touched.name && (
                                <div className="input-feedback">
                                    {errors.name}
                                </div>
                            )}

                        <FilePond server="api/uploadLeagueImage" />   

                        <FormControlLabel
                            control={
                                <Checkbox name="salaryCap"
                                
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                checked={values.salaryCap}


                                />
                            }
                            label="Salary Cap?"
                        />
                        <button
                            type="button"
                            className="outline"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >
                            Reset
                        </button>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>

                        <DisplayFormikState {...props} />
                    </form>
                );
            }}
        </Formik>

        <MoreResources />
    </div>
);

export default Form;
