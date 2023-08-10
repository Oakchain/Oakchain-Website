import React from 'react'
import '../../Header/index.css'
import logo from '../../../assets/images/logo.svg'
import dropdown from '../../../assets/images/dropdown.svg'
import auth1 from '../../../assets/images/auth1.svg'
import auth2 from '../../../assets/images/auth2.svg'
import oakMenu from '../../../assets/images/oak_menu.svg'
import searchIcon from '../../../assets/images/searchIc.svg'
import selectIcon from '../../../assets/images/selectDropdown.svg'



const Header = ({ toggle }) => {
    return (
        <div className='  position-fixe w-100'>
            <div className='oak-container-fluid d-flex align-items-center justify-content-between oak-header header-authorized '>
                <div className='header-logo'>
                    <img src={logo} alt='logo' />
                </div>

                <ul className='d-none d-flex align-items-center justify-content-between nav-items__wrapper'>
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

                <div className='d-none d-md-flex align-items-center'>
                    <div className='header-auth_item d-flex align-items-center px-3'>
                        <div>
                            <img src={auth1} alt='icon' />
                        </div>
                        <p className='ps-2 oak-wallet_point mb-0'>11.5k</p>
                    </div>
                    <div className='header-auth_item px-3'>
                        <img src={auth2} alt='icon' />
                    </div>
                    <div className='px-3'>
                        <p className=' oak-wallet_name mb-0'>P</p>
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

        </div>

    )
}

export default Header