import React from 'react'
import w1 from '../../assets/images/w1.svg'
import w2 from '../../assets/images/w2.svg'
import w3 from '../../assets/images/w3.svg'
import w4 from '../../assets/images/w4.svg'
import w5 from '../../assets/images/w5.svg'
import w6 from '../../assets/images/w6.svg'
import w7 from '../../assets/images/w7.svg'
import w8 from '../../assets/images/w8.svg'

import search from '../../assets/images/seacrhWallet.svg'
import arrow from '../../assets/images/backArrow.svg'


const Wallets = ({ setSection }) => {
    return (
        <div className='oak-wallet__container'>
            <div className='d-flex align-items-center mb-3'>
                <div role='button' onClick={() => {
                    setSection('scan-page')
                }}>
                    <img src={arrow} alt='icon' />
                </div>
                <p className='w-100 text-center scan-text mb-0'>Choose Wallet</p>
            </div>
            <div className='search-wallet__wrapper d-flex mb-4 align-items-center'>
                <div>
                    <img src={search} alt='icon' className='h-100 w-100 mb-1' />
                </div>
                <input className=' px-2 search-wallet__input border-none' />
            </div>
            <div className='d-flex align-items-cente justify-content-between mb-3'>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w1} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                    <p className='wallet-is_installed mb-0 text-center'>Installed</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w2} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w3} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w4} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>


            </div>
            <div className='d-flex align-items-cente justify-content-between mb-3'>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w8} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                    <p className='wallet-is_installed mb-0 text-center'>Installed</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w5} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w7} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w6} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>


            </div><div className='d-flex align-items-cente justify-content-between mb-3'>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w1} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                    <p className='wallet-is_installed mb-0 text-center'>Installed</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w2} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w3} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>
                <div className='oak-wallet__wrapper'>
                    <div className='oak-wallet_img__container'>
                        <img src={w4} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                    </div>
                    <p className='wallet-name mb-0 text-center'>Metamask</p>
                </div>


            </div>

        </div>
    )
}

export default Wallets