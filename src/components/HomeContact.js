import React from 'react';
import { useHistory } from 'react-router';

const decoration = require("../assets/Decoration.svg").default;
const facebookIcon = require("../assets/Facebook.svg").default;
const instagramIcon = require("../assets/Instagram.svg").default;


const HomeContact = () => {

    let history = useHistory();

    return (
        <>
          <div id="contact" className="contact">
              <div className="contactForm">
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration}></img>
                <form>
                    <div className="contactFormInput">
                    <label  className="singleInput singleInputFirst">
                        <p>Wpisz swoje imię</p>
                        <input
                            type="text"
                            placeholder="Krzysztof"              
                        />
                                        
                    </label>
                    <label  className="singleInput">
                        <p>Wpisz swój email</p>
                        <input
                            type="email"
                            placeholder="abc@xyz.pl"      
                        />
                    </label>
                    </div>
                    <label>
                        <p>Wpisz swoją wiadomość</p>
                        <textarea
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        >

                        </textarea>
                    </label>
                </form>
              </div>
              {/* <footer>
                  <p>Copyright by Coders Lab</p>
                  <img src={facebookIcon}></img>
                  <img src={instagramIcon}></img>
              </footer> */}
          </div>
        </>
    );
};

export default HomeContact;