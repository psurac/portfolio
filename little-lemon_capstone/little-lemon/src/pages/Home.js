import React from 'react';

import HeroSection from '../components/HeroSection.js';
import SpecialsSection from '../components/SpecialsSection.js';
import TestimonialsSection from '../components/TestimonialsSection.js';
import AboutSection from '../components/AboutSection.js';

function Home() {
    return (
            <div>
                <HeroSection />
                <SpecialsSection />
                <TestimonialsSection />
                <AboutSection />
            </div>
        );
};

export default Home;