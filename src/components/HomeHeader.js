import React from 'react';
import {Link } from 'react-scroll';
import { useHistory } from 'react-router';


const headerImg = require("../assets/Home-Hero-Image.jpg").default;
const decoration = require("../assets/Decoration.svg").default;

const HomeHeader = () => {

        let history = useHistory();

    return (
        <>
           <container id="home" className="header">
                <div>
                    <img className="headerImage" src={headerImg} alt="box with some stuff"></img>
                </div>
                <div>
                    <div className="headerMenu">
                        <div>
                        <ul className="menuSmall">
                            <li className="signIn"><a href="logowanie">Zaloguj</a></li>
                            <li className="signUp"><a href="rejestracja">Załóż konto</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="menuBig">
                            <li className="headerMenuBigStart"><a href="/">Start</a></li>
                            <li><Link to="what'sGoingOn" smooth={true}>O co chodzi?</Link></li>
                            <li><Link to="about" smooth={true} >O nas</Link></li>
                            <li>Fundacje i organizacje</li>
                            <li><Link to="contact" smooth={true}>Kontakt</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="headerBox">
                        <h1>
                            <span>Zacznij pomagać!</span><span>Oddaj Niechciane rzeczy w zaufane ręce.</span>
                        </h1>
                        <img className="headerDecoration" src={decoration}></img>
                        <div className="headerButtonBox">
                            <button onClick={() => {history.push('/logowanie')}} className="headerButton headerButtonText">oddaj rzeczy</button>
                            <button onClick={() => {history.push('/logowanie')}} className="headerButton">zorganizuj zbiórkę</button>
                        </div>
                    </div>
                </div>
            </container>
        </>
    );
};

export default HomeHeader;