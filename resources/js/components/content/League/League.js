import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import {Form}  from "./Form";
import Paper from "@material-ui/core/Paper";
import getLeagueInfo from "../ajax/GetLeagueInfo";
import { isNullOrUndefined } from "util";



const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
})

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
            .spacing.unit * 5}px`
    },
    container: {
        maxWidth: "200px"
    }
});

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
         data: null,
                   
         
        };
        this.getLeagueData = this.getLeagueData.bind(this);
     
    }

    getLeagueData() {
        console.log( 'according to GetLeagueData:  ', this.state.data);
         return this.state.data;
    }
   
    handleSubmit(event)
        {
            event.preventDefault();
         console.log(event.target.name.value);

        }
  
    handleChange(event)  {
         var parentElement = event.target.parentElement; // this is where custom tags will be

     
            if(event.target.type=='checkbox')  {
                console.log('is it checked?  ',event.target.checked);
                if(event.target.checked == true)  {
                    this.state.data[event.target.name] = 1;
                }
                else  {
                    this.state.data[event.target.name] = 0;

                }    
            }  
           
            if(event.target.type =='text')    {
                console.log('fuck off cunt:', parentElement.dataset.texttype);
                if (parentElement.dataset.texttype==='Currency')  {
                    // CURRENCY DECORATORS
                    var value = event.target.value;
                    value = value.replace(/\D/g, ''); // 1125, but a string, so convert it to number
                     value = parseInt(value);
                    console.log(value);
                    this.state.data[event.target.name] = formatter.format(value);
                }
                else  {

                  
                    this.state.data[event.target.name] = event.target.value;
                }
                
               
            }
          else
          {
           
          }

          this.setState({data:this.state.data});

           
    }



    componentDidMount() {
        const self = this;
        getLeagueInfo(self);
    }

    render() {
        
        const classes = this.props;
            return <React.Fragment>
                <div className={classes.container}>
                    <Paper elevation={1} className={classes.paper}>
                        <h1>Form</h1>
                        {!isNullOrUndefined(this.getLeagueData()) &&
                        <Form
                            handleChange={this.handleChange.bind(this)} 
                            getLeagueData={this.getLeagueData.bind(this)}
                            handleSubmit ={this.handleSubmit.bind(this)}
                          >
                      
                        </Form>
                        };
                    </Paper>
                </div>
            </React.Fragment>;
    }
}

export default withStyles(styles)(InputForm);
