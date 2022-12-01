import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Price = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'free for everyone',
                'life time access',
                '10GB data storage',
                'Hosting free for you'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99, benefits: [
                'You will const money',
                'life time access',
                '10GB data storage',
                'Hosting free for you'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, benefits: [
                'Unlimited services for you',
                'life time access',
                '10GB data storage',
                'Hosting free for you'
            ]
        },
    ]

    return (
        <div className='bg-purple-400 text-center p-8 mt-5'>
            <div>
                <h1 className='text-5xl text-white font-bold mb-4'>Deal Your Best Options.</h1>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum in minima laudantium? Eveniet impedit fugiat aperiam laudantium dolore, adipisci perferendis soluta dolorum? Nobis voluptate ipsam fugiat inventore ab minima provident?</p>
            </div>
            <div className='grid md:grid-cols-3 gap-5 mt-5'>
                {
                    pricingOptions.map(option => <PricingOption option={option} key={option.id}></PricingOption>)
                }
            </div>


        </div>
    );
};

export default Price;