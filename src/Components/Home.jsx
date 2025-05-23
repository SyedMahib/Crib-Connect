import React, { use } from 'react';
import Banner from './Banner';
import FeaturedListings from './FeaturedListings';
import { AuthContext } from '../Provider/AuthProvider';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

const Home = () => {

    const { user } = use(AuthContext);

    return (
        <div className='min-h-[calc(100vh-323px)]'>
            <header>
                <Banner></Banner>
            </header>
            <main>
                {
                    user && (
                        <FeaturedListings></FeaturedListings>
                    )
                }
                <HowItWorks></HowItWorks>
                <Testimonials></Testimonials>
            </main>
        </div>
    );
};

export default Home;