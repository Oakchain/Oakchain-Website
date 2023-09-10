import React, { useState, useContext, useEffect, useRef } from 'react';
import './index.css'
import logo from '../../assets/images/logo.svg'
import oakMenu from '../../assets/images/oak_menu.svg'
import dropdown from '../../assets/images/dropdown.svg'
import arrow from '../../assets/images/arrow.svg'
// import { connectWallet } from '../../utils/walletConnect'
import WalletModal from '../../component/WalletModal'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useNavigate } from "react-router-dom";
import { useLogin} from '../../client/Hook/Auth'


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

    const navigate = useNavigate()
    const [isResourcesDisplayed, setIsResourcesDisplayed] = useState(false);

    const resourcesDropdownRef = useRef(null);
    const companyDropdownRef = useRef(null);

    // Custom hook to handle clicking outside dropdowns and close them
    useClickOutside(resourcesDropdownRef, () => {
        setIsResourcesDisplayed(false);
    });

    useClickOutside(companyDropdownRef, () => {
        setIsCompanyDisplayed(false);
    });

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

    const { open, close } = useWeb3Modal()

    const [isOpen, setIsOpen] = useState(false)
    const { address } = useAccount()

    const { login } = useLogin()

    
    useEffect(() => {
        if (address) {
            const data = {
                wallet_address: address
            }
            login(data)
        }
    }, [address])

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='  position-fixe w-100'>
            <div className='oak-container-fluid d-flex align-items-center justify-content-between oak-header'>
                <div className='header-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <ul className='d-md-flex d-none align-items-center justify-content-between nav-items__wrapper mb-0'>
                    <li className='nav-item'>How it Works</li>
                    <li className='nav-item d-flex align-items-center' onClick={toggleResourcesDisplay}>
                        Resources
                        <span className='dropdown-wrapper'>
                            <img src={dropdown} alt='logo' />
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
                            <img src={dropdown} alt='logo' />
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

                <div className='d-md-block d-none'>
                    {/* <button className='oak-btn' onClick={toggleModal}> */}
                    <button className='oak-btn' onClick={() => {
                        open()
                    }}>
                        Connect to Web3 <span>
                            <img src={arrow} alt='icon' />
                        </span>
                    </button>
                </div>

                <div className='d-block d-md-none' onClick={toggle}>
                    <img src={oakMenu} alt='icon' />
                </div>
            </div>

            <WalletModal toggle={toggleModal} isOpen={isOpen} />
        </div>

    )
}

export default Header