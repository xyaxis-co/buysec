import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ProductCard from '../helpers/productCard'
import '@splidejs/splide/dist/css/splide.min.css';
import Image from '../../extras/assests/product_img_test.png'

const carasoul : React.FC<any> = ({ page,  width, height }) => {

    const homepage = (
        <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </>
    );

    const product = (
        <>
            <img src={Image} alt="" />
        </>
    )
    const carasoulWidth = Number.parseInt(width);
    const carasoulHeight = Number.parseInt(height);
    return (
        <Splide options={ { rewind: true, width: carasoulWidth, height: carasoulHeight , gap   : '1rem'} } className='flex flex-col justify-center align-center justify-center'>
            {
                page === "homepage" ? (
                    <>
                        <SplideSlide className='flex justify-center flex-wrap'>
                            {homepage}
                        </SplideSlide>
                        <SplideSlide className='flex justify-center flex-wrap'>
                            {homepage}
                        </SplideSlide>
                    </>
                ) : (
                    page === "product" && (
                        <>
                            <SplideSlide className='flex justify-center flex-wrap'>
                                {product}
                            </SplideSlide>
                            <SplideSlide className='flex justify-center flex-wrap'>
                                {product}
                            </SplideSlide>      
                        </>
                    )
                )
            }
            
        </Splide>
    )
}

export default carasoul
