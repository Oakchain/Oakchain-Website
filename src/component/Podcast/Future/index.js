import React from 'react'
import Fd1 from '../../../assets/images/fd1.svg'
import Fd2 from '../../../assets/images/fd2.svg'
import Fd3 from '../../../assets/images/fd33.svg'
import FutureCard from './Card'


const Future = () => {
    return (
        <div className='future-podcasts__wrapper d-flex align-items-center no-wrap overflow-auto'>
            <FutureCard image={Fd1} />
            <FutureCard image={Fd2} />
            <FutureCard image={Fd3} />
            <FutureCard image={Fd2} />
            <FutureCard image={Fd1} />
        </div>
    )
}

export default Future