import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../extras/assests/product_img_test.png';

const productCard : React.FC<any>= () => {
    
    return (
        <Link to='/product'>
        <div  className='cursor-pointer w-72 h-fit rounded-3xl mx-5 my-5 hover:shadow-2xl hover:shadow-secondary-500 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 duration-300'>
            <div>
                <div className='flex flex-row-reverse text-primary-light'>
                    <span className="far fa-heart text-primary_light text-3xl m-4 absolute cursor-pointer"></span>
                </div>
                <img src={Image} alt="" className='rounded-t-3xl' />
            </div>
            <div className='text-left p-3'>
                <p className='text-xl font-semibold h-16 w-fit overflow-hidden'> m m m m m m m m m m Product Name z m mm m m m m m m m m m</p>
                <p className='text-xl'>$ 223456</p>
            </div>
        </div>
        </Link>
        
    )
}

export default productCard
