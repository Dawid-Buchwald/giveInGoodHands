import React from 'react';
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
            </div>
        </>
    );
};

export default Home;