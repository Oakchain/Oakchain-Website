import React, { useState } from 'react'
import './index.css'
import closeIcon from '../../assets/images/closeIcon.svg'
import WalletModal from '../../component/WalletModal'
import arrow from '../../assets/images/arrow.svg'
import dropdown from '../../assets/images/dropdown.svg'



const Sidebar = ({ show, toggle }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`oak-sidebar d-block d-md-none ${show ? 'show w-100' : ""}`}>
                <div className='oak-left__sidebar'>
                    <div className=' py-3'>
                        <div className='d-flex align-items-center justify-content-end mb-3' onClick={toggle}>
                            <img src={closeIcon} />
                        </div>
                        <div className='mb-4'>
                            <button className='oak-btn btn py-3' onClick={toggleModal}>
                                Connect to Web3 <span>
                                    <img src={arrow} alt='icon' />
                                </span>
                            </button>
                        </div>
                    </div>

                    <ul className=' nav-items__wrapper'>
                        <li className='nav-item'>How it Works</li>
                        <li className='nav-item d-flex align-items-center'>
                            Resources
                            <span className='dropdown-wrapper'>
                                <img src={dropdown} alt='logo' />
                            </span>

                        </li>
                        <li className='nav-item d-flex align-items-center'>
                            Company

                            <span className='dropdown-wrapper'>
                                <img src={dropdown} alt='logo' />
                            </span>
                        </li>

                    </ul>
                </div>


            </div>

            <WalletModal toggle={toggleModal} isOpen={isOpen} />

        </>

    )
}

export default Sidebar