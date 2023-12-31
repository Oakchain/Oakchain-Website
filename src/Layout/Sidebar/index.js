import React, { useState, useEffect } from 'react'
import './index.css'
import closeIcon from '../../assets/images/closeIcon.svg'
import WalletModal from '../../component/WalletModal'
import arrow from '../../assets/images/arrow.svg'
import dropdown from '../../assets/images/dropdown.svg'

import { useNavigate } from "react-router-dom";
import { useWeb3Modal } from '@web3modal/react'



const Sidebar = ({ show, toggle }) => {

    const navigate = useNavigate()
    const [isResourcesDisplayed, setIsResourcesDisplayed] = useState(false);
    useEffect(() => {
        // Close the profile when the sidebar is closed
        if (!show) {
            setIsResourcesDisplayed(false);
            setIsCompanyDisplayed(false);
        }
    }, [show]);
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

    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const { open, close } = useWeb3Modal()

    return (
        <>
            <div className={`oak-sidebar d-block d-md-none ${show ? 'show w-100' : ""}`}>
                <div className='oak-left__sidebar'>
                    <div className=' py-3'>
                        <div className='d-flex align-items-center justify-content-end mb-3' onClick={toggle}>
                            <img src={closeIcon} />
                        </div>
                        <div className='mb-4'>
                            <button className='oak-btn oak-connect py-3' onClick={() => {
                                toggle()
                                open()
                            }}>
                                Connect to Web3 <span>
                                    <img src={arrow} alt='icon' />
                                </span>
                            </button>
                        </div>
                    </div>

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
                                        navigate('/learn')
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
                </div>


            </div>

            {/* <WalletModal toggle={toggleModal} isOpen={isOpen} /> */}

        </>

    )
}

export default Sidebar