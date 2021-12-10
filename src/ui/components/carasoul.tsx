import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '../helpers/productCard'

const carasoul : React.FC<any> = () => {
    return (
        <div className='w-full flex align-center justify-center'>
            <ul className='flex flex-col justify-center w-100'>
                <li className='w-full flex justify-center'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </li>
                <li className='w-full flex jusify-center'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </li>
            </ul>
        </div>
    )
}

export default carasoul
