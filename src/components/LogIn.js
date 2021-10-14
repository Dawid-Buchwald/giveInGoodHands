import React from 'react';


const LogIn = () => {
    return (
        <>
           <container className="headerSubpage">
                <div>
                    <div className="headerMenu">
                        <div>
                            <ul className="menuSmall">
                                <li className="signIn">Zaloguj</li>
                                <li className="signUp">Załóż konto</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="menuBig">
                                <li className="headerMenuBigStart">Start</li>
                                <li>O co chodzi?</li>
                                <li>O nas</li>
                                <li>Fundacje i organizacje</li>
                                <li>Kontakt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </container>
        </>
    );
};

export default LogIn;