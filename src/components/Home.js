import React from 'react';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import HomeHeader from './HomeHeader';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeThreeColumns from './HomeThreeColumns';

const Home = () => {
    return (
        <>
            <div>
                <HomeHeader />
                <HomeThreeColumns />
                <HomeSimpleSteps />
                <HomeAbout />
                <HomeContact />
            </div>
        </>
    );
};

export default Home;