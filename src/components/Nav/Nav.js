import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Nav = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'Shop', link: '/shop' },
        { id: 5, name: 'Contact', link: '/contact' },
    ]
    return (
        <nav className='bg-purple-200'>
            <div onClick={() => setOpen(!open)} className='md:hidden w-6 h-6'>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static duration-500 ease-in bg-purple-200 w-full p-3 ${open ? 'top-6' : 'top-[-200px]'}`}>
                {
                    routes.map(route => <Link
                        route={route}
                        key={route.id}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;