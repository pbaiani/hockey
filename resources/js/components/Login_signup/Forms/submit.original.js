 import { SubmissionError } from 'redux-form';
//import SubmissionError from 'redux-form/lib/SubmissionError'

import { stopSubmit } from 'redux-form';

function submit(values, dispatch, props) {
    // console.log("my object: %o", props);


    const newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
    
    }
   var emailExists = 0;


fetch('api/users', {
        method: 'post',
        /* headers are important*/
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
                body: JSON.stringify(newUser)
    })

        .then(response => {

            // this piece of shit possibly only for checking http statuses?  
            // would explain the time I've had finding the response

            //    console.log("my Response object: %o", response);

            //  console.log('trying to get email', response.email);

            return response.json();
        })
        .then(data => {

            if (data.emailExists && data.emailExists == 1) {
                throw { email: 'Email already Exists' };
               console.log('fired');
                


      /*          
                throw new SubmissionError({
                    email: 'This email is already registered'
                })

*/
               //stopSubmit('Signup', {email: 'Email Exists!', _error: 'Email Exists!' });



                //throw new Error('Email Exists');
               
            }


            //update the state of products and currentProduct
            /*
             this.setState((prevState) => ({
                 products: prevState.products.concat(data),
                 currentProduct: data
                 
             }))
             */
        }).catch(error=>
            {
                console.log(error);
              /*   throw new SubmissionError({
                  email: 'Email Exists!',
                 _error: 'Login failed!',
             
            
            })
             */
            }).then(success=>
            {

              // console.log('hi');

           })
        





    /*

    return sleep(1000).then(() => { // simulate server latency
        if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!',
            });
        } else if (values.password !== 'redux-form') {
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!',
            });
        } else {
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }
    });
    */
}

export default submit;
