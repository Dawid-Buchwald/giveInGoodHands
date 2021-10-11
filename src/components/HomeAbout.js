import React from 'react';

const decoration = require("../assets/Decoration.svg").default;
const signature = require("../assets/Signature.svg").default;

const HomeAbout = () => {
    return (
        <>
          <div className="homeAbout">
              <section className="homeAboutSection">
                  <h5>O nas</h5>
                  <img src={decoration}></img>
                  <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                  <img className="signature" src={signature}></img>                
              </section>
              <section className="peopleImage">

              </section>
          </div>

        </>
    );
};

export default HomeAbout;