import React from 'react';
import Slider from '../../components/Sliders/Slider';
import MostRecentTask from '../../components/MostRecentTask/MostRecentTask';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Service from '../../components/Service/Service';
import Testimonials from '../../components/Testimonials/Testimonials';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import ReviewSummary from '../../components/ReviewSummary/ReviewSummary';

const Home = () => {
    return (
        <div>
            <Slider/>
            <MostRecentTask/>
            <WhyChooseUs/>
            <Service/>
            <Testimonials/>
            <ReviewSummary/>
            <HowItWorks/>
        </div>
    );
};

export default Home;