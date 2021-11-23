import React from 'react'
import Logo from '../assets/svgs/Logo.svg';

const Header: React.FC = () => {
    return (
        <>
            <div className="flex flex-row items-center bg-white h-24">
                <div>
                    <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex-1" />
                <div>
                    Logo and Categories
                </div>
                <div className="flex-1" />
                <div>Links</div>
            </div>
        </>
    )
}

export default Header
