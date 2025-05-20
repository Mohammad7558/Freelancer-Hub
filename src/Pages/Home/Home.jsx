import React from 'react';
import Slider from '../../components/Sliders/Slider';
import MostRecentTask from '../../components/MostRecentTask/MostRecentTask';

const Home = () => {
    return (
        <div>
            <Slider/>
            <MostRecentTask/>
        </div>
    );
};

export default Home;