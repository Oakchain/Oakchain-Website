import React from 'react'

const FutureCard = ({ image }) => {
    return (
        <div className='future-podcast__img_wrapper'>
            <img src={image} alt='i-podcast-img' className='h-100 w-100' style={{
                objectFit: 'cover'
            }} />
        </div>
    )
}

export default FutureCard