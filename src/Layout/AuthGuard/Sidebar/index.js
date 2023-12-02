import React, { useState, useEffect } from 'react'
import './index.css'
import closeIcon from '../../../assets/images/closeIcon.svg'
import WalletModal from '../../../component/WalletModal'
import arrow from '../../../assets/images/arrow.svg'
import NavItems from '../AuthItems/items'
import { Nav } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import dropdown from '../../../assets/images/dropdown.svg'
import auth1 from '../../../assets/images/oakimg.svg'
import auth2 from '../../../assets/images/auth2.svg'
import { useNavigate } from "react-router-dom";
import userP from '../../../assets/images/userP/user1a.svg'
import accountS from '../../../assets/images/userP/accountSettings.svg'
import oakWal from '../../../assets/images/userP/walletSettings.svg'
import login from '../../../assets/images/userP/login.svg'
import AccountSettings from '../../../component/AccountSettings';
import OakWallet from '../../../component/oakwallet'
const Sidebar = ({ show, toggle }) => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    const navigate = useNavigate()
    useEffect(() => {
        // Close the profile when the sidebar is closed
        if (!show) {
            setIsProfileDisplayed(false);
            setIsResourcesDisplayed(false);
            setIsCompanyDisplayed(false);
        }
    }, [show]);

    // State to keep track of whether the profile is displayed or not
    const [isProfileDisplayed, setIsProfileDisplayed] = useState(false);

    // Function to toggle the profile display
    const toggleProfileDisplay = () => {
        console.log("SAdsd")
        setIsProfileDisplayed((prevState) => !prevState);
    };
    const [isResourcesDisplayed, setIsResourcesDisplayed] = useState(false);

    // Function to toggle the Resources display
    const toggleResourcesDisplay = () => {
        console.log("working")
        setIsResourcesDisplayed((prevState) => !prevState);

    }
    const [isCompanyDisplayed, setIsCompanyDisplayed] = useState(false);

    // Function to toggle the Company display
    const toggleCompanyDisplay = () => {
        console.log("working")
        setIsCompanyDisplayed((prevState) => !prevState);

    }


    // State for AccountSettings modal
    const [isOpenn, setIsOpenn] = useState(false);

    // State for OakWallet modal
    const [isWOpen, setIsWOpen] = useState(false);

    // Function to toggle AccountSettings modal
    const toggleModaln = () => {
        setIsOpenn(!isOpenn);
    };

    // Function to toggle OakWallet modal
    const toggleWModal = () => {
        setIsWOpen(!isWOpen);
    };

    return (
        <>
            <div className={`oak-sidebar d-block d-md-none ${show ? 'show w-100' : ""}`}>
                <div className='oak-left__sidebar'>
                    <div className='py-3'>
                        <div className='d-flex align-items-center justify-content-between mb-3'>
                            <div className='d-flex align-items-center'>
                                <div className='header-auth_item d-flex align-items-center pe-3'>
                                    <div>
                                        <img className='log' src={auth1} alt='icon' />
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

                    <div className='mb-4 oak-user__details-mobile d-flex align-items-center ' onClick={toggleProfileDisplay}>
                        <img src={userP} alt='userProfile' className=' oak-wallet_name mb-0' ></img>

                        <p className=' oak-wallet_user-name mb-0 text-center px-3'>Patrick James</p>


                    </div>

                    {isProfileDisplayed && (
                        <div className='oak-profilee'>
                            <ul>
                                <li>
                                    <img src={accountS} alt='account Settings' />
                                    <button onClick={toggleModaln}>
                                        <h3>Account Settings</h3></button>
                                </li>
                                <li>
                                    <img src={oakWal} alt='oak wallet' />
                                    <button onClick={toggleWModal}>
                                        <h3>Oak Wallet</h3></button>
                                </li>
                                <li>
                                    <img src={login} alt='login' />
                                    <button onClick={() => {
                                        navigate('/login')
                                    }}>
                                        <h3>Login</h3></button>
                                </li>
                            </ul>
                        </div>
                    )}

                    <ul className=' nav-items__wrapper'>
                        <li className='nav-item mobile'>How it Works</li>
                        <li className='nav-item mobile d-flex align-items-center' onClick={toggleResourcesDisplay}>
                            Resources
                            <span className='dropdown-wrapper'>
                                <img src={dropdown} alt='logo' />
                            </span>

                        </li>
                        {isResourcesDisplayed && (
                            <div className='oak-resourcess'>
                                <ul>
                                    <li onClick={() => {
                                        navigate('/Community')
                                    }}>
                                        <h3>Community</h3>
                                    </li>
                                    <li onClick={() => {
                                        navigate('/Learn')
                                    }}>
                                        <h3>Learn</h3>
                                    </li>
                                    <li onClick={() => {
                                        navigate('/blog')
                                    }}>
                                        <h3>Our Blog</h3>
                                    </li>
                                    <li onClick={() => {
                                        navigate('/server')
                                    }}>
                                        <h3>Discord Server</h3>
                                    </li>
                                </ul>
                            </div>
                        )}
                        <li className='nav-item mobile d-flex align-items-center' onClick={toggleCompanyDisplay}>
                            Company

                            <span className='dropdown-wrapper'>
                                <img src={dropdown} alt='logo' />
                            </span>
                        </li>
                        {isCompanyDisplayed && (
                            <div className='oak-companyy'>
                                <ul>
                                    <li onClick={() => {
                                        navigate('/about')
                                    }}>
                                        <h3>About Us</h3>
                                    </li>
                                   
                                    <li onClick={() => {
                                        navigate('/faqs')
                                    }}>
                                        <h3>FAQs</h3>
                                    </li>
                                    <li onClick={() => {
                                        navigate('/help')
                                    }}>
                                        <h3>Help Center</h3>
                                    </li>
                                </ul>
                            </div>
                        )}

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

                <AccountSettings toggle={toggleModaln} isOpen={isOpenn} />
                <OakWallet toggle={toggleWModal} isWOpen={isWOpen} />
            </div>

            <WalletModal toggle={toggleModal} isOpen={isOpen} />

        </>

    )
}

export default Sidebar