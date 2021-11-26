import React, { useState } from 'react'
import Logo from '../../assets/svgs/Logo.svg';

interface Handler {
    (): void
}

const Header: React.FC<any> = () => {
    const [search, setSearch] = useState<boolean>(false);
    const onSearchHandler: Handler = (): void => {
        setSearch(true);
    }
    return (
        <>
            <div className="w-full inset-0 text-2xl bg-white shadow-sm flex flex-row items-center h-24 font-black">
                <div className="w-1/6 flex flex-row justify-center">
                    <a href="/" >
                        <img src={Logo} alt="Logo"/>
                    </a>
                </div>
                <div className="w-1/6 text-primary">
                    <p className="cursor-pointer">Categories</p>
                </div>
                <div className="mx-3.5 w-2/6 text-primary">
                    <input type="text" placeholder="Search" autoFocus id="signin" className={`${search ? 'visible': 'invisible'} w-full border-4 rounded-3xl border-tertiary px-3 py-1.5`}/>
                </div>
                <div className="mx-10 w-2/6 flex flex-row items-center justify-evenly">
                    <div className="hidden text-primary mx-1.5" onClick={onSearchHandler}>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <div className="mx-2 border-4 rounded-3xl border-tertiary text-primary px-4 hover:bg-tertiary hover:text-white">
                        <a href="/signin">Sign In</a>
                    </div>
                    <div className="hidden mx-2 border-4 rounded-3xl border-tertiary text-primary hover:text-white px-4 hover:bg-tertiary" >
                        <a href="/sell">Sell</a>
                    </div>
                    <div className="hidden mx-2 text-primary">
                        <a href="/chats"><i className="fas fa-comment"></i></a>
                    </div>
                    <div className="hidden mx-2 text-primary">
                        <button><i className="fas fa-bell"></i></button>
                    </div>
                    <div className="hidden mx-2 text-primary">
                        <a href="/person"><i className="fas fa-user-alt"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
