import React, { useState, useContext } from 'react'
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


const Header = ({ toggle }) => {
    const {theme, toggler } = useContext(ThemeContext);

    const navigate = useNavigate()
    // State to keep track of whether the profile is displayed or not
    const [isProfileDisplayed, setIsProfileDisplayed] = useState(false);

    // Function to toggle the profile display
    const toggleProfileDisplay = () => {
        setIsProfileDisplayed((prevState) => !prevState);
    };

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
                        <img src={theme === 'dark' ? dropdownDark : dropdown} alt='logo' className='dropdown'/>

                        </span>

                    </li>
                    <li className='nav-item d-flex align-items-center'>
                        Company

                        <span className='dropdown-wrapper'>
                        <img src={theme === 'dark' ? dropdownDark : dropdown} alt='logo' className='dropdown'/>

                        </span>
                    </li>

                </ul>

                <div className='d-none d-md-flex align-items-center'>
                    <div className='header-auth_item d-flex align-items-center px-3'>
                        <div>
                        <img src={theme === 'dark' ? auth1Dark : auth1} alt='icon' />

                        </div>
                        <p className='ps-2 oak-wallet_point mb-0'>11.5k</p>
                    </div>
                    <div className='header-auth_item px-3' id='toggleSwitch' onClick={toggler}>
                    <img src={theme === 'dark' ? auth2Dark : auth2} alt='icon' />

                    </div>
                    <div className='px-3'>
                        <img src={userP} alt='userProfile' className=' oak-wallet_name mb-0' onClick={toggleProfileDisplay}></img>
                        {isProfileDisplayed && (
                            <div className='oak-profile'>
                                <ul>
                                    <li>
                                        <img src={accountS} alt='account Settings'className='accountIcon' />
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
                                            navigate('/login')
                                        }}>
                                            <h3>Login</h3></button>
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
            <AccountSettings toggle={toggleModal} isOpen={isOpen} />
            <OakWallet toggle={toggleWModal} isWOpen={isWOpen} />
        </div>

    )
}

export default Header