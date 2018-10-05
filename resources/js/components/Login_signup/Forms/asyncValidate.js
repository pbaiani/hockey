const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



export default (async function asyncValidate(values, dispatch, props) {
  
    //console.log("my object: %o", props);
   

    if (['foo@foo.com', 'bar@bar.com'].includes(values.email)) {
        throw { email: 'Email already Exists' };
    }
});
