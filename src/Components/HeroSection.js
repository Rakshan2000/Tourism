import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';

function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video 
                src='/videos/video-2.mp4' 
                autoPlay 
                loop 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                    ADVENTURE AWAITS
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center">
                    What are you waiting for?
                </p>
                <div className='flex flex-wrap justify-center gap-4 font-bold'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        WATCH TRAILER <i className='far fa-play-circle ml-2' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
