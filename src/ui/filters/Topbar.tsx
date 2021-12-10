import React from 'react'

const Topbar: React.FC<any>= () => {
    return (
        <>
            <div className="flex justify-around w-100 lg:gap-x-96 gap-x-32">
                <div className="w-1/2 lg:text-3xl text-2xl cursor-arrow flex flex-row items-center justify-center">
                        <h1>All Products</h1>
                </div>
                <div className="w-1/2 text-gray flex flex-row items-center justify-center my-5">
                    <div className="bg-white border-0 rounded-full shadow hover:shadow-md flex flex-row items-center justify-center cursor-pointer px-5">
                        <div className="lg:text-2xl text-lg">
                            <h3>Filters</h3>
                        </div>
                        <div className="m-3 lg:text-xl text-base">
                            <i className="fas fa-sliders-h"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
