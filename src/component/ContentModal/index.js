import React, { useState } from 'react'
import { Modal } from 'reactstrap'
import bold from '../../assets/images/bold.svg'
import italic from '../../assets/images/italic.svg'
import underline from '../../assets/images/underline.svg'
import ul from '../../assets/images/ul.svg'
import ol from '../../assets/images/ol.svg'
import link from '../../assets/images/link.svg'
import gallery from '../../assets/images/gallery.svg'
import "./index.css"
const ContentModal = ({ isOpen, toggle }) => {

    const [section, setSection] = useState('scan-page');
   

    return (
        <Modal
            isOpen={isOpen}
            toggle={toggle}
            className='adminCreateContent modal-dialog-centered'
            modalClassName='oak-modal__card'
        >
           <div className='contentInput'>
            <input className='inp' placeholder='Enter Title'></input>
           </div>
           <div className='contentText'>
            <textarea className='texta' placeholder='Enter article text here'></textarea>
           </div>
           <div className='contentBottom'>
            <div className='conTainBot'>
                <img src={bold} alt='bold' ></img>
                <img src={italic} alt='italic'></img>
                <img src={underline} alt='underline'></img>
                <img src={ul} alt='ul'></img>
                <img src={ol} alt='ol'></img>
                <img src={link} alt='link'></img>
                <img src={gallery} alt='gallery'></img>
            </div>
            <button className='publishBtn'>
                <h1 className='hh1'>Publish</h1>
            </button>
           </div>

        </Modal >
    )
}

export default ContentModal