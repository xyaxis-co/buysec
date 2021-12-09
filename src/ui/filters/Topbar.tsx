import React from 'react'

const Topbar: React.FC<any>= () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-3/6 text-gray shadow hover:shadow-md bg-white flex flex-row items-center justify-evenly border-0 m-5 rounded-full p-1 ">
                    <div className="w-2/4 lg:text-2xl text-lg cursor-arrow flex flex-row items-center justify-center">
                        <h1>All Products</h1>
                    </div>
                    <div className="w-1/4 flex-1" />
                    <div className="w-1/4 flex flex-row items-center justify-center cursor-pointer">
                        <div className="lg:text-2xl text-lg">
                            <h3>Sort</h3>
                        </div>
                        <div className="m-3 lg:text-xl text-base">
                            <i className="fas fa-sort"></i>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-row items-center justify-center cursor-pointer">
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
