import React from 'react';

const headerImg = require("../assets/Home-Hero-Image.jpg").default;
const decoration = require("../assets/Decoration.svg").default;

const HomeHeader = () => {
    return (
        <>
           <container className="headerContainer">
                <div>
                    <img className="headerImage" src={headerImg} alt="box with some stuff"></img>
                </div>
                <div>
                    <ul>
                        <li>Zaloguj</li>
                        <li>Załóż konto</li>
                    </ul>
                </div>
                <div></div>
                <div className="headerBox">
                    <h1>
                        <span>Zacznij pomagać!</span><span>Oddaj Niechciane rzeczy w zaufane ręce.</span>
                    </h1>
                    <img className="headerDecoration" src={decoration}></img>
                    <div className="headerButtonBox">
                        <button className="headerButton">oddaj rzeczy</button>
                        <button className="headerButton">zorganizuj zbiórkę</button>
                    </div>
                </div>
           </container>
        </>
    );
};

export default HomeHeader;