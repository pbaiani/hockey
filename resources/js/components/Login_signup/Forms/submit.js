import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values, dispatch,props) {
    console.log("my object: %o", props);

  
    const newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password
        
    }

    alert(newUser);
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
            return response.json();
        })
        .then(data => {
            //update the state of products and currentProduct
           /*
            this.setState((prevState) => ({
                products: prevState.products.concat(data),
                currentProduct: data
                
            }))
            */
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
