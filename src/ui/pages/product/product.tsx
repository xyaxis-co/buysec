/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react'
import Carasoul from '../../components/carasoul'

const product: React.FC<any> = () => {
    return (
        <div className='w-full flex flex-col flex-wrap'>
            <div className='w-full h-full flex flex-row flex-wrap'>
                <div className='w-4/6 flex flex-col'>
                    <div>
                        <h1 className='text-tertiary font-bold text-3xl h-24 m-5 p-5 w-fit text-ellipsis overflow-hidden'>Product Name m m m m m m m m m m  m m m m m m m m m m  m m m m m m m m m m m m m m m m m m  mm mm m m m m m m m m m </h1>
                    </div>
                    <div className='m-5 p-5'>
                        <Carasoul page="product" width="900" height="400" />
                    </div>
                </div>
                <div className='flex flex-col text-white m-10 p-8 w-3/12 bg-primary_light rounded-2xl gap-6 text-center shadow-3xl'>
                    <div>
                        <h2 className='w-full font-extrabold text-3xl cursor-default'>
                            $ 22222
                        </h2>
                    </div>
                    <div className='text-secondary'>
                        <span className='fas fa-share-alt text-3xl mx-5 cursor-pointer'></span>
                        <span className='far fa-heart text-3xl mx-5 cursor-pointer'></span>
                    </div>
                    <div className=''>
                        <div className='my-2 flex flex-row justify-center items-center gap-4 text-xl'>
                            <p>Sold By :</p>
                            <p>Anonymous</p>
                        </div>
                        <div className='my-2 flex flex-row justify-center items-center gap-4 text-xl'>
                            <p>Posted on :</p>
                            <p>26 Mar 2021</p>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <iframe className='rounded-xl hover:shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.697565029237!2d75.86501435!3d22.71246215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1175bed6b5%3A0x2c1d732ce5412d!2sIndore%20Junction!5e0!3m2!1sen!2sin!4v1639258215473!5m2!1sen!2sin" width="290" height="150" loading="lazy"></iframe>
                    </div>
                    <div>
                        <div className='cursor-pointer'>
                            <p className='bg-tertiary m-1 p-2 rounded-lg text-xl font-semibold cursor-pointer hover:shadow-2xl'>Contact Owner</p>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-3 my-2'>
                            <span className='fas fa-phone-alt'></span>
                            <p className='cursor-default'>XXXXXXXXXX</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border w-full'>
                Second Part
            </div>
        </div>
    )
}

export default product
