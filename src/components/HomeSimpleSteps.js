import React from 'react';

const decoration = require("../assets/Decoration.svg").default;
const shirtIcon = require("../assets/Icon-1.svg").default;
const bagIcon = require("../assets/Icon-2.svg").default;
const magnifierIcon = require("../assets/Icon-3.svg").default;
const arrowIcon = require("../assets/Icon-4.svg").default;

const HomeSimpleSteps = () => {
    return (
        <>
            <div className="simpleSteps">
                <div className="simpleStepsHeader">
                    <p>Wystarczą 4 proste kroki</p>
                    <img className="headerDecoration" src={decoration}></img>
                </div>
                <div className="simpleStepsFourColumns">
                    <section className="simpleStepsSection">
                        <img src={shirtIcon}></img>
                        <h4>Wybierz rzeczy</h4>
                        <div className="separatingLine"></div>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </section>
                    <section className="simpleStepsSection">
                        <img src={bagIcon}></img>
                        <h4>Spakuj je</h4>
                        <div className="separatingLine"></div>
                        <p>skorzystaj z worków na śmieci</p>
                    </section>
                    <section className="simpleStepsSection">
                        <img src={magnifierIcon}></img>
                        <h4>Zdecyduj komu chcesz pomóc</h4>
                        <div className="separatingLine"></div>
                        <p>wybierz zaufane miejsce</p>
                    </section>
                    <section className="simpleStepsSection">
                        <img src={arrowIcon}></img>
                        <h4>Zamów kuriera</h4>
                        <div className="separatingLine"></div>
                        <p>kuerier przyjedzie w dogodnym terminie</p>
                    </section>
                </div>
                <div className="simpleStepsLink">
                    <section>
                        <a href="#">oddaj rzeczy</a>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HomeSimpleSteps;