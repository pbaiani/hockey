
import { SubmissionError } from 'redux-form';
import Cookies from 'universal-cookie';
const cookie = new Cookies();


const submit = (values, dispatch, props) => {
    //console.log('Dump of props: ', props);
    //console.log('state from submit:  ', props.getCurrentState());

   // props.changeLoggedState('fdfad', true);
   
   
    const { firstName, lastName, email, password } = values;
    console.log(props.form);

    if (props.form == 'Login') {

        return new Promise((resolve, reject) => {
            axios.post('api/login', { email: email, password: password })
                .then(response => {
                    //console.log('response is: ', response, 'response.data is: ', response.data, 'response.code is: ', response.status);
                    console.log('response data is:', response.data.data);

                    if(!response.data.success) {
                        if (response.data.noUser) {
                            var errObj = new SubmissionError({ email: 'Account does not exist.' }) //need to add store dispatch for failed user registration (for form feedback) 
                            }
                        else if (response.data.passwordAuthFailure) {
                            var errObj = new SubmissionError({ password: 'Password is incorrect.' }) //need to add store dispatch for failed user registration (for form feedback) 
                        }
                        reject(errObj);
                    }
                    else { // everything should be good
                        console.log('Users credentials are good');
                        console.log('user data token is:  ', response.data.data.auth_token);
                        cookie.set('token', response.data.data.auth_token, { path: '/' });
                        //  store.dispatch({ type: AUTH_USER });
                           // browserHistory.push('/');
                        console.log('submit has current state!: ', props.getCurrentState());
                        props.changeLoggedState(this, true);
                        props.setUser(this,response.data.data);
                        resolve();



                    }
                    }).catch((error) => {
                    console.log('error is: ', error)
                    //errorHandler(store.dispatch, error, AUTH_ERROR)  
                    if (error instanceof SubmissionError) reject(error);

                });



        })

    }


    else {


        return new Promise((resolve, reject) => {
            console.log('From actual submit', firstName);
            axios.post('api/users', { firstName: firstName, lastName: lastName, email: email, password: password })
                .then(response => {
                    //console.log('response is: ', response, 'response.data is: ', response.data, 'response.code is: ', response.status);

                    console.log('response data is:', response.data.data);

                    if (response.data.success == true) {
                        console.log('registerUser response.data.success is true');

                        console.log('user data token is:  ', response.data.data.auth_token);
                        cookie.set('token', response.data.data.auth_token, { path: '/' });


                        //  store.dispatch({ type: AUTH_USER });
                        // browserHistory.push('/');


                        resolve();
                    } else {
                        if (response.data.emailExists && response.data.emailExists == 1) { //duplicate email 
                            console.log('emailExists!')
                            var errObj = new SubmissionError({ email: 'Email already Exists.' }) //need to add store dispatch for failed user registration (for form feedback) 
                            reject(errObj);
                        } else if (response.code === 2) {
                            console.log('response.code = 2')
                            var errObj = new SubmissionError({ email: 'Invalid email pattern.' })
                            reject(errObj);
                        }
                    }
                }).catch((error) => {
                    console.log('error is: ', error)
                    //errorHandler(store.dispatch, error, AUTH_ERROR)  
                    if (error instanceof SubmissionError) reject(error);

                });
        })

    }




    //export default function submit({ firstName, lastName, email, password, getCurrentState}) {


}

export default submit;