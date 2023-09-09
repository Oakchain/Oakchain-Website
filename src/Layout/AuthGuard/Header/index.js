import React, { useState, useContext, useEffect, useRef } from 'react';
import '../../Header/index.css'
import logo from '../../../assets/images/logo.svg'
import dropdown from '../../../assets/images/dropdown.svg'
import auth1 from '../../../assets/images/auth1.svg'
import auth2 from '../../../assets/images/auth2.svg'
import oakMenu from '../../../assets/images/oak_menu.svg'
import searchIcon from '../../../assets/images/searchIc.svg'
import selectIcon from '../../../assets/images/selectDropdown.svg'
import userP from '../../../assets/images/userP/user1a.svg'
import accountS from '../../../assets/images/userP/accountSettings.svg'
import oakWal from '../../../assets/images/userP/walletSettings.svg'
import login from '../../../assets/images/userP/login.svg'
import { useNavigate } from "react-router-dom";
import AccountSettings from '../../../component/AccountSettings';
import OakWallet from '../../../component/oakwallet'
import { ThemeContext } from '../../../App';
import dropdownDark from '../../../assets/images/dropDownDark.svg';
import auth1Dark from '../../../assets/images/acornDark.svg';
import auth2Dark from "../../../assets/images/modeIcon.svg"
import '../../../assets/style/index.css'
import { useAccount, useDisconnect } from 'wagmi'
import Cookies from 'js-cookie'
import { useUser } from '../../../client/Hook/Auth'

// Custom hook to handle clicking outside an element
function useClickOutside(ref, callback) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}

const Header = ({ toggle }) => {
    const { disconnect } = useDisconnect()

    const { theme, toggler } = useContext(ThemeContext);

    const navigate = useNavigate()
    // State to keep track of whether the profile is displayed or not
    const [isProfileDisplayed, setIsProfileDisplayed] = useState(false);

    // Function to toggle the profile display
    const toggleProfileDisplay = () => {
        setIsProfileDisplayed((prevState) => !prevState);
    };

    const [isResourcesDisplayed, setIsResourcesDisplayed] = useState(false);
    const resourcesDropdownRef = useRef(null);
    const companyDropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    // Custom hook to handle clicking outside dropdowns and close them
    useClickOutside(resourcesDropdownRef, () => {
        setIsResourcesDisplayed(false);
    });

    useClickOutside(companyDropdownRef, () => {
        setIsCompanyDisplayed(false);
    });
    useClickOutside(profileDropdownRef, () => {
        setIsProfileDisplayed(false)
    })


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
    const [isOpen, setIsOpen] = useState(false);

    // State for OakWallet modal
    const [isWOpen, setIsWOpen] = useState(false);

    // Function to toggle AccountSettings modal
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    // Function to toggle OakWallet modal
    const toggleWModal = () => {
        setIsWOpen(!isWOpen);
    };



    const { address } = useAccount()
    const { user } = useUser({ wallet_address: address })



    // console.log('---<<connectors>>---', activeConnector, isConnected, connect, address)
    return (
        <div className='  position-fixe w-100'>
            <div className='oak-container-fluid d-flex align-items-center justify-content-between oak-header'>
                <div className='header-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <ul className='d-none d-md-flex align-items-center justify-content-between nav-items__wrapper mb-0'>
                    <li className='nav-item'>How it Works</li>
                    <li className='nav-item d-flex align-items-center' onClick={toggleResourcesDisplay}>
                        Resources
                        <span className='dropdown-wrapper'>
                            <img src={theme === 'dark' ? dropdownDark : dropdown} alt='logo' className='dropdown' />

                        </span>
                        {isResourcesDisplayed && (
                            <div className='oak-resources' ref={resourcesDropdownRef}>
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
                                        navigate('/Blog')
                                    }}>
                                        <h3>Our Blog</h3>
                                    </li>
                                    <li onClick={() => {
                                        navigate('/Server')
                                    }}>
                                        <h3>Discord Server</h3>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className='nav-item d-flex align-items-center' onClick={toggleCompanyDisplay}>
                        Company

                        <span className='dropdown-wrapper'>
                            <img src={theme === 'dark' ? dropdownDark : dropdown} alt='logo' className='dropdown' />

                        </span>
                        {isCompanyDisplayed && (
                            <div className='oak-company' ref={companyDropdownRef}>
                                <ul>
                                    <li onClick={() => {
                                        navigate('/about')
                                    }}>
                                        <h3>About Us</h3>
                                    </li>
                                    <li onClick={() => {
                                        navigate('/team')
                                    }}>
                                        <h3>Our Team</h3>
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
                    </li>

                </ul>

                <div className='d-none d-md-flex align-items-center'>
                    <div className='header-auth_item d-flex align-items-center px-3'>
                        <div>
                            <img src={theme === 'dark' ? auth1Dark : auth1} alt='icon' />

                        </div>
                        <p className='ps-2 oak-wallet_point mb-0'>{user?.points ?? 0}</p>
                    </div>
                    <div className='header-auth_item px-3' id='toggleSwitch' onClick={toggler}>
                        <img src={theme === 'dark' ? auth2Dark : auth2} alt='icon' />

                    </div>
                    <div className='px-3'>
                        <p className=' oak-wallet_name mb-0'
                            onClick={toggleProfileDisplay}
                            role='button'
                        >{user?.username?.length > 0 ? user?.username?.slice(0, 2) : address?.slice(0, 2) ?? 'N/A'}</p>
                        {/* <img src={userP} alt='userProfile' className=' oak-wallet_name mb-0' onClick={toggleProfileDisplay}></img> */}
                        {isProfileDisplayed && (
                            <div className='oak-profile' ref={profileDropdownRef}>
                                <ul>
                                    <li>
                                        <img src={accountS} alt='account Settings' className='accountIcon' />
                                        <button onClick={toggleModal}>
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
                                            Cookies.remove('OAK_AUTH_TOKEN')
                                            disconnect()
                                            window.location.href = '/'
                                        }}>
                                            <h3>Logout</h3></button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className='d-flex align-items-center d-md-none'>
                    <div className='mobile-auth__items d-flex align-items-center justify-content-center me-2'>
                        <img src={searchIcon} alt='icon' />
                    </div>
                    <div className='mobile-auth__items d-flex align-items-center justify-content-center me-2'>
                        <p className='mobile-language__select mb-0'>EN</p>
                        <img src={selectIcon} alt='icon' />
                    </div>
                    <div className='d-block ' onClick={toggle}>
                        <img src={oakMenu} alt='icon' />
                    </div>
                </div>
            </div>
            <AccountSettings toggle={toggleModal} isOpen={isOpen} user={user} />
            <OakWallet toggle={toggleWModal} isWOpen={isWOpen} />
        </div>

    )
}

export default Header