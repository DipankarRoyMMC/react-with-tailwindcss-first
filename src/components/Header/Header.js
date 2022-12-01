import React from 'react';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='text-center space-y-5 mt-4'>
                <h2 className='text-4xl text-purple-600'>Pleae Save your money near Future.</h2>
                <h1 className='text-6xl text-red-400'>This is Header Component.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam aliquid quaerat corrupti. Obcaecati sed quidem explicabo temporibus aut. A ipsa iure cumque voluptates possimus minus perspiciatis aut repellendus qui dolorum!</p>
            </div>
        </div>
    );
};

export default Header;