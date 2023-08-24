import React from 'react'
import NavItems from './items'
import { Nav } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '../../../assets/images/searchIc.svg'
import './index.css'
import '../../../assets/style/index.css'

const AuthItems = () => {
    const location = useLocation()
    return (
        <div className='d-none d-md-block oak-container-fluid oak-nav-item_wrapper'>
            <div className='d-flex align-items-center justify-content-between'>
                <Nav className=" d-flex align-items-center" >
                    {
                        NavItems.map(el =>
                            <div className=''>
                                <Link className={`mb-0 d-flex align-items-center nav-link ${location.pathname.includes(el?.label?.toLowerCase()) ? 'active' : ''}`} to={`/${el?.label.toLowerCase()}`}>
                                    <div className='pe-2 '>
                                        <img src={location.pathname.includes(el?.label?.toLowerCase()) ? el?.activeIcon : el?.icon} alt='icon' />
                                    </div>
                                    <p className='mb-0 nav-items'>
                                        {el?.label}
                                    </p>
                                </Link>
                            </div>
                        )
                    }
                </Nav>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='oak-search__wrapper d-flex me-3'>
                        <input
                            placeholder='Search'
                        />
                        <div>
                            <img src={SearchIcon} alt={'icon'} />
                        </div>
                    </div>
                    <div className='oak-search__wrapper select'>
                        <select className='oak-language__select'>
                            <option>English</option>
                        </select>

                    </div>


                </div>
            </div>



        </div>
    )
}

export default AuthItems