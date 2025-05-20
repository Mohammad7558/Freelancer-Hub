import React from 'react';
import Slider from '../../components/Sliders/Slider';
import MostRecentTask from '../../components/MostRecentTask/MostRecentTask';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Service from '../../components/Service/Service';

const Home = () => {
    return (
        <div>
            <Slider/>
            <MostRecentTask/>
            <WhyChooseUs/>
            <Service/>
        </div>
    );
};

export default Home;