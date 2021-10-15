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

    if(!values.password2){
        errors.password2="Powtórz hasło"
    } else if(values.password2.length < 6){
        errors.password2="Podane hasło jest za krótkie!"
    } else if(values.password2!== values.password || values.password2.length !== values.password.length){
        errors.password2="Hasła muszą być takie same!"
    }


    return errors;
}

export default Validation;

