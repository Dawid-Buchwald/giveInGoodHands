const Validation = (values) => {

    let errors={};

    if(!values.email){
        errors.email="Email jest wymagany."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Podany email jest nieprawidłowy!"
    }

    if(!values.password){
        errors.password="Hasło jest wymagane."
    } else if(values.password.length < 6){
        errors.password="Podane hasło jest za krótkie!"
    }

    return errors;
}

export default Validation;

