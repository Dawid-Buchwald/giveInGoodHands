import React, {useState} from 'react';
import { useHistory } from 'react-router';
import Validation from './Validation';

const decoration = require("../assets/Decoration.svg").default;



const LogIn = () => {

    let history = useHistory();

    const [values, setValues] = useState ({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };

    return (
        <>
           <container>
                <div>
                    <div className="headerMenu headerSubpage">
                        <div>
                            <ul className="menuSmall">
                                <li className="signIn"><a href="logowanie">Zaloguj</a></li>
                                <li className="signUp"><a href="rejestracja">Załóż konto</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="menuBig">
                                <li className="headerMenuBigStart"><a href="/">Start</a></li>
                                <li>O co chodzi?</li>
                                <li>O nas</li>
                                <li>Fundacje i organizacje</li>
                                <li>Kontakt</li>
                            </ul>
                        </div>
                    </div>
                    <div className="logInForm">
                        <h2>Zaloguj się</h2>
                        <img className="headerDecoration" src={decoration}></img>
                        <form>
                            <div className="logInFormInput">
                                <div className="logInFormInputSingle">
                                    <label>
                                        <p>Email</p>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <p className="error">{errors.email}</p>}
                                    </label>
                                </div>
                                <div className="logInFormInputSingle">
                                    <label>
                                        <p>Hasło</p>
                                        <input className="error"
                                            type="password" 
                                            name="password" 
                                            value={values.password}
                                            onChange={handleChange} 
                                        />
                                        {errors.password && <p className="error">{errors.password}</p>}
                                    </label>
                                </div>
                            </div>
                            
                        </form>
                        <div className="buttonBox">
                                <button  onClick={() => {history.push('/rejestracja')}}>Załóż konto</button>
                                <button onClick={handleFormSubmit}>Zaloguj się</button>
                         </div>
                    </div>
                </div>
            </container>
        </>
    );
};

export default LogIn;