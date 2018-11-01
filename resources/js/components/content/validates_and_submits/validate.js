export default function(values, props) {
    //  console.log("my object: %o", props);

  const errors = {};



    if (props.form == "LeagueDetails") {




console.log(props.form);



    } else if (props.form == "Signup") {
        const requiredFields = ["firstName", "lastName", "email", "password", "password2"];
        //console.log("my object: %o", values);

        requiredFields.forEach(field => {
            if (!values[field]) {
                errors[field] = "Required";
            }
        });

        if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }

        var error = "";
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;

        if (values.password) {
            if (!lowerCaseLetters.test(values.password)) {
                errors.password = "Password requres at least 1 lower case letter";
            } else if (!upperCaseLetters.test(values.password)) {
                errors.password = "Password requres at least 1 upper case letter";
            } else if (!numbers.test(values.password)) {
                errors.password = "Password requires at least 1 number";
            } else if (values.password.length < 8) {
                errors.password = "Password requres at least 8 characters";
            } else if (values.password !== values.password2) {
                errors.password = "Passwords do not match";
            }
        }
    }

    return errors;
}
