import React, { useState } from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'
import dropdown from '../../assets/images/dropdown.svg'
import arrow from '../../assets/images/arrow.svg'
import WalletModal from '../../component/WalletModal'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='  position-fixe w-100'>
            <div className='oak-container-fluid d-flex align-items-center justify-content-between oak-header'>
                <div className='header-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <ul className='d-flex align-items-center justify-content-between nav-items__wrapper'>
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

                <div>
                    <button className='oak-btn btn' onClick={toggleModal}>
                        Connect to Web3 <span>
                            <img src={arrow} alt='icon' />
                        </span>
                    </button>
                </div>
            </div>

            <WalletModal toggle={toggleModal} isOpen={isOpen}/>
        </div>

    )
}

export default Header