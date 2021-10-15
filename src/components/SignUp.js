import React from 'react';
import { useHistory } from 'react-router';

const decoration = require("../assets/Decoration.svg").default;



const SignUp = () => {

    let history = useHistory();

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
                    <div className="homeSignUp">
                        <h2>Załóż konto</h2>
                        <img className="headerDecoration" src={decoration}></img>
                        <form>
                            <div className="signUpForm">
                                <div className="signUpFormInputSingle">
                                    <label>
                                        <p>Email</p>
                                        <input type="email"></input>
                                    </label>
                                </div>
                                <div className="signUpFormInputSingle">
                                    <label>
                                        <p>Hasło</p>
                                        <input type="password"></input>
                                    </label>
                                </div>
                                <div className="signUpFormInputSingle">
                                    <label>
                                        <p>Powtórz hasło</p>
                                        <input type="password"></input>
                                    </label>
                                </div>
                            </div>
                            
                        </form>
                        <div className="buttonBox">
                                <button  onClick={() => {history.push('/logowanie')}}>Zaloguj się</button>
                                <button>Załóż konto</button>
                         </div>
                    </div>
                </div>
            </container>
        </>
    );
};

export default SignUp;