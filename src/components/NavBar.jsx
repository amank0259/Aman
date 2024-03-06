import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            name: "Home",
            link: '/'
        },
        {
            id: 2,
            name: "About",
            link: "/About"
        },
        {
            id: 3,
            name: "Skills",
            link: "/Skills"
        },
        {
            id: 4,
            name: "Projects",
            link: "/Projects"
        },
        {
            id: 5,
            name: "Contact",
            link: "/Contact"
        }
    ];

    return (
        <div className='w-full h-20 flex text-white bg-black opacity-90 items-center justify-between px-4 md:px-40 lg:px-64'>
            <Link to="Home" className='font-bold text-2xl cursor-pointer'>
                Aman
            </Link>
            <div className='hidden md:flex gap-10 cursor-pointer'>
                {links.map((item, index) => (
                    <Link key={index} to={item.link}>{item.name}</Link>
                ))}
            </div>
        </div>
    );
}

export default NavBar;
