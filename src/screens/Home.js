import React from 'react';
import Navbar from '../components/Navbar'
import Temp from '../components/Temp'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel';
export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel /></div>
            <div className='m-3'></div>
            <div><Temp /></div>
            <Temp />
            <Temp />
            <Temp />

            <div><Footer /></div>
        </div>
    );
}
