import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='text-[20px] font-bold mb-4 text-center'>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <CardItem 
              src="/images/img-9.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem 
              src="/images/img-2.jpg" 
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem 
              src="/images/img-8.jpg" 
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            {/* Add more CardItem components as needed */}
          </ul>
          
          {/* Copy the same ul tag for more cards */}
        </div>
      </div>  
    </div>
  )
}

export default Cards
