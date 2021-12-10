import React from 'react';
import Logo from '../../assets/pngs/Horizontal_Logo.png';
import Google from '../../assets/svgs/Google_Color.svg';
import Github from '../../assets/svgs/Github.svg';
import Facebook from '../../assets/svgs/Facebook_Color.svg';

const Signin: React.FC<any>= () => {

    const onGoogleLogin = () => {};
    const onGithubLogin = () => {};
    const onFacebookLogin = () => {};

    return (
        <>
            <div className="my-10 w-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-around rounded-3xl p-20 shadow-2xl">
                <div>
                    <img src={Logo} alt="Logo" width="200" height="100"/>
                </div>
                <div className="flex flex-col items-stretch justify-evenly">
                <button onClick={onGoogleLogin} className="bg-google flex flex-row items-center p-4 h-10 rounded m-2 cursor-pointer hover:opacity-80">
                    <img src={Google} alt="Google-Button" className="h-8 rounded" />
                    <span className="text-white m-3">Signin with Google</span>
                </button>
                <button onClick={onGithubLogin} className="bg-github flex flex-row items-center p-4 h-10 rounded m-2 cursor-pointer hover:opacity-80">
                    <img src={Github} alt="Github-Button" className="h-8 rounded" />
                    <span className="text-white m-3">Signin with Github</span>
                </button>
                <button onClick={onFacebookLogin} className="bg-facebook flex flex-row items-center p-4 h-10 rounded m-2 cursor-pointer hover:opacity-80">
                    <img src={Facebook} alt="Facebook-Button" className="h-8 rounded" />
                    <span className="text-white m-3">Signin with Facebook</span>
                </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Signin
