import React from 'react';
import loading from '../../assets/gifs/loading.gif'

const Loading: React.FC<any>  = () => {
    return (
        <>
            <div className="flex items-center justify-center h-full">
                <img src={loading} alt="loading" />
            </div>
        </>
    )
}

export default Loading;
