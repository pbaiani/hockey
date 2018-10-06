
import { SubmissionError } from 'redux-form';

export default function submit({ firstName, lastName, email, password }) {

    return new Promise((resolve, reject) => {
        axios.post('api/users', { firstName: firstName, lastName: lastName, email: email, password: password })
            .then(response => {
                console.log('response is: ', response, 'response.data is: ', response.data, 'response.code is: ', response.code);
                if (response.data.success) {
                    console.log('registerUser response.data.success is true')
                    cookie.save('token', response.data.token, { path: '/' });
                    store.dispatch({ type: AUTH_USER });
                    browserHistory.push('/');
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