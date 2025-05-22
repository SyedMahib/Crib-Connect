import React from 'react';
import { useLoaderData } from 'react-router';
import ListingCard from './ListingCard';

const BrowseListings = () => {

    const listings = useLoaderData()
    console.log(listings);

    return (
        <div className='min-h-[calc(100vh-323px)]'>
            <div className='grid grid-cols-3 gap-5 my-[100px]'>
                {
                    listings.map((listing) => <ListingCard key={listing._id} listing={listing}></ListingCard>)
                }
            </div>
        </div>
    );
};

export default BrowseListings;