import React, { useState } from 'react'
import { Modal } from 'reactstrap'
import oakLogo from '../../assets/images/logov2.svg'
import m1 from '../../assets/images/m1.svg'
import m2 from '../../assets/images/m2.svg'
import copy from '../../assets/images/copy.svg'
import barCode from '../../assets/images/barcode.svg'
import w1 from '../../assets/images/w1.svg'
import w2 from '../../assets/images/w2.svg'
import w3 from '../../assets/images/w3.svg'
import w4 from '../../assets/images/w4.svg'
import w5 from '../../assets/images/w5.svg'
import w6 from '../../assets/images/w6.svg'
import w7 from '../../assets/images/w7.svg'
import w8 from '../../assets/images/w8.svg'
import activeGuide from '../../assets/images/activeGuide.svg'
import { Row, Col } from 'reactstrap'
import './index.css'
import Wallets from './wallets'
import Guide from './guide'

const WalletModal = ({ isOpen, toggle }) => {

    const [section, setSection] = useState('scan-page')

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            className='modal-dialog-centered'
            modalClassName='oak-modal__card'
        >
            <div className='oak-modal__header'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <img src={oakLogo} alt='logo' />
                    </div>
                    <div className='d-flex'>
                        <div role='button' className='modal-tool_item pe-3' onClick={() => {
                            setSection('guide')
                        }}>
                            <img src={section === 'guide' ? activeGuide : m1} alt='info-icon' />
                        </div>
                        <div role='button' className='modal-tool_item ps-3' onClick={toggle}>
                            <img src={m2} alt='close-icon' />
                        </div>
                    </div>
                </div>
                <h3 className='modal-guide_text b-3'>Connect to Wallet</h3>
                <div className='d-flex align0items-center'>

                </div>
            </div>

            {
                section === 'scan-page' &&
                <div className='oak-wallet__container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='scan-text mb-0'>Scan with phone</p>
                        <div>
                            <img src={copy} alt='copy-icon' />
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='w-100 oak-barcode__wrapper'>
                            <img src={barCode} alt='barcode' className='w-100' />
                        </div>

                    </div>
                    <div>
                        <p className='scan-text mb-3'>Choose wallet</p>
                        <div className='d-flex align-items-cente justify-content-between'>
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
                            </div><div className='oak-wallet__wrapper'>
                                <div className='oak-wallet_img__container'>
                                    <img src={w3} alt='barcode' className='w-100 objectFit-cover img-fluid' />
                                </div>
                                <p className='wallet-name mb-0 text-center'>Metamask</p>
                            </div>
                            <div>


                                <div className='p-2 oak-all_wallet__wrapper d-flex align-items-center justify-content-center' onClick={() => {
                                    setSection('all-wallet')
                                }}>
                                    <div className='' role='button'>
                                        <div className='  d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center justify-content-center pe-1 pb-1'>
                                                <div className='oak-wallet_img__container'>
                                                    <img src={w4} alt='barcode' className='w-100 objectFit-cover ' />
                                                </div>

                                            </div>
                                            <div className='d-flex align-items-center justify-content-center pb-1 '>
                                                <div className='oak-wallet_img__container '>
                                                    <img src={w5} alt='barcode' className='w-100 objectFit-cover ' />
                                                </div>

                                            </div>
                                        </div>
                                        <div className='  d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <div className='oak-wallet_img__container'>
                                                    <img src={w6} alt='barcode' className='w-100 objectFit-cover ' />
                                                </div>

                                            </div><div className='d-flex align-items-center justify-content-center '>
                                                <div className='oak-wallet_img__container'>
                                                    <img src={w6} alt='barcode' className='w-100 objectFit-cover ' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <p className='wallet-name mb-0 text-center'>See all</p>
                            </div>

                        </div>
                    </div>
                </div>
            }

            {
                section === 'all-wallet' && <Wallets setSection={setSection} />
            }
            {
                section === 'guide' && <Guide setSection={setSection} />
            }


        </Modal >
    )
}

export default WalletModal