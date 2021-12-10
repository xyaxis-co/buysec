import React from 'react'
import Image from '../../extras/assests/product_img_test.png';

const productCard : React.FC<any>= () => {
    return (
        <div className='w-72 h-fit rounded-3xl mx-5 my-5 shadow-2xl'>
            <div>
                <div className='flex flex-row-reverse text-primary-light'>
                    <span className="far fa-heart text-3xl m-4 absolute"></span>
                </div>
                <img src={Image} alt="" className='rounded-t-3xl' />
            </div>
            <div className='text-left p-3'>
                <p className='text-xl font-semibold h-16 w-fit overflow-ellipsis'>Product Name z m mm m m m m m m m m m</p>
                <p className='text-xl'>$ 223456</p>
            </div>
        </div>
        
    )
}

export default productCard