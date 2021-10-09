import React from 'react';

const headerImg = require("../assets/Home-Hero-Image.jpg").default;
const decoration = require("../assets/Decoration.svg").default;

const HomeHeader = () => {
    return (
        <>
           <container className="header">
                <div>
                    <img className="headerImage" src={headerImg} alt="box with some stuff"></img>
                </div>
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
                    <div className="headerBox">
                        <h1>
                            <span>Zacznij pomagać!</span><span>Oddaj Niechciane rzeczy w zaufane ręce.</span>
                        </h1>
                        <img className="headerDecoration" src={decoration}></img>
                        <div className="headerButtonBox">
                            <button className="headerButton headerButtonText">oddaj rzeczy</button>
                            <button className="headerButton">zorganizuj zbiórkę</button>
                        </div>
                    </div>
                </div>
            </container>
        </>
    );
};

export default HomeHeader;