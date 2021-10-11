import React from 'react';
import HomeAbout from './HomeAbout';
import HomeHeader from './HomeHeader';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeThreeColumns from './HomeThreeColumns';

const Home = () => {
    return (
        <>
            <div>
                <HomeHeader></HomeHeader>
                <HomeThreeColumns></HomeThreeColumns>
                <HomeSimpleSteps></HomeSimpleSteps>
                <HomeAbout></HomeAbout>
            </div>
        </>
    );
};

export default Home;