import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white rounded p-4'>
            <h1 className='bg-purple-500 p-3 text-xl font-bold rounded text-white'>{name}</h1>
            <p>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='font-bold text-xl'>/mo</span>
            </p>
            <div className='space-y-3 text-left'>
                <h3 className='text-xl font-mono'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
                <button className='bg-green-500 rounded w-full text-white p-2 mt-2 font-bold flex justify-center'>Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon></button>
            </div>
        </div>
    );
};

export default PricingOption;