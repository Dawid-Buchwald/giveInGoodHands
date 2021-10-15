import React from 'react';

const decoration = require("../assets/Decoration.svg").default;



const SignUp = () => {


    return (
        <>
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
            <div className="logOut">
                 <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                 <img className="headerDecoration" src={decoration}></img>
                 <button>Strona główna</button>
            </div>          
        </>
    );
};

export default SignUp;