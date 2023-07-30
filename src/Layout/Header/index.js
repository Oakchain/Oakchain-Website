import React, { useState } from 'react'
import './index.css'
import logo from '../../assets/images/logo.svg'
import dropdown from '../../assets/images/dropdown.svg'
import arrow from '../../assets/images/arrow.svg'
// import { connectWallet } from '../../utils/walletConnect'
import WalletModal from '../../component/WalletModal'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div className='  position-fixe w-100'>
            <div id='oak-nav-container' className='oak-container-fluid d-flex align-items-center justify-content-between oak-header'>
                <div id='logo' className='header-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <ul className='d-flex align-items-center justify-content-between nav-items__wrapper'>
                    <li className='nav-item'>How it Works</li>
                    <li id='resources' className='nav-item d-flex align-items-center'>
                        Resources
                        <span className='dropdown-wrapper'>
                            <img src={dropdown} alt='logo' />
                        </span>

                    </li>
                    <li id='company' className='nav-item d-flex align-items-center'>
                        Company

                        <span className='dropdown-wrapper'>
                            <img src={dropdown} alt='logo' />
                        </span>
                    </li>

                </ul>

                <div>
                    <button id='connect__btn' className='oak-btn btn' onClick={toggleModal}>
                        Connect to Web3 <span>
                            <img src={arrow} alt='icon' />
                        </span>
                    </button>
                </div>

                <div className={menuOpen ? 'menu open rotate' : 'menu'}>
                    <div onClick={handleMenuClick} className='menu__icon'></div>
                </div>

                {/* menu display items */}
                {/* <div classList="menu__display__items">
                    <ul>
                        <li classList="list__header">How it works</li>

                        <li classList="list__header">Company</li>
                        <div classList="sub-list__container">
                            <ul>
                                <li>About us</li>
                                <li>Our Team</li>
                                <li>FAQs</li>
                                <li>Help Centre</li>
                            </ul>
                        </div>

                        <li classList="list__header">Resources</li>
                        <div classList="sub-list__container">
                            <ul>
                                <li>Community</li>
                                <li>Learn</li>
                                <li>Our Blog</li>
                                <li>Discord Server</li>
                            </ul>
                        </div>
                    </ul>
                </div> */}
            </div>

            <WalletModal toggle={toggleModal} isOpen={isOpen}/>
        </div>

    )
}

export default Header