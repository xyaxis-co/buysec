import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '../helpers/productCard'
import '@splidejs/splide/dist/css/splide.min.css';

const carasoul : React.FC<any> = () => {
    return (
        <Splide className='w-full flex flex-col justify-center align-center justify-center'>
            <SplideSlide className='w-full flex justify-center'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </SplideSlide>
            <SplideSlide className='w-full flex justify-center'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </SplideSlide>
        </Splide>
    )
}

export default carasoul
