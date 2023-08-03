import React, { useState } from 'react'
import './index.css'
import closeIcon from '../../../assets/images/closeIcon.svg'
import WalletModal from '../../../component/WalletModal'
import arrow from '../../../assets/images/arrow.svg'
import NavItems from '../AuthItems/items'
import { Nav } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import dropdown from '../../../assets/images/dropdown.svg'
import auth1 from '../../../assets/images/auth1.svg'
import auth2 from '../../../assets/images/auth2.svg'

const Sidebar = ({ show, toggle }) => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={`oak-sidebar d-block d-md-none ${show ? 'show w-100' : ""}`}>
                <div className='oak-left__sidebar'>
                    <div className='py-3'>
                        <div className='d-flex align-items-center justify-content-between mb-3'>
                            <div className='d-flex align-items-center'>
                                <div className='header-auth_item d-flex align-items-center pe-3'>
                                    <div>
                                        <img src={auth1} alt='icon' />
                                    </div>
                                    <p className='ps-2 oak-wallet_point mb-0'>11.5k</p>
                                </div>
                                <div className=' px-3'>
                                    <img src={auth2} alt='icon' />
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-end ' onClick={toggle}>
                                <img src={closeIcon} />
                            </div>
                        </div>
                    </div>

                    <div className='mb-4 oak-user__details-mobile d-flex align-items-center '>
                        <p className=' oak-wallet_name mb-0'>P</p>
                        <p className=' oak-wallet_user-name mb-0 text-center px-3'>Patrick James</p>
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
                    <Nav className=" d-block " >
                        {
                            NavItems.map(el =>
                                <div className='mobile-nav_item' onClick={toggle}>
                                    <Link className={`mb-0 d-flex align-items-center nav-link ${location.pathname.includes(el?.label?.toLowerCase()) ? 'active' : ''}`} to={`/${el?.label.toLowerCase()}`}>
                                        <div className='pe-2'>
                                            <img src={location.pathname.includes(el?.label?.toLowerCase()) ? el?.activeIcon : el?.icon} alt='icon' />
                                        </div>
                                        <p className='mb-0 '>
                                            {el?.label}
                                        </p>
                                    </Link>
                                </div>
                            )
                        }
                    </Nav>
                </div>


            </div>

            <WalletModal toggle={toggleModal} isOpen={isOpen} />

        </>

    )
}

export default Sidebar