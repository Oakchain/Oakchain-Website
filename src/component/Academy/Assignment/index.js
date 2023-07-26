import React from 'react'
import downloadIcon from '../../../assets/images/primaryDownload.svg'
import pdf from '../../../assets/images/pdf.svg'


const Assignment = () => {
    return (
        <div className='assignment-wrapper d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <div className='pe-2' style={{
                    flexShrink: 0
                }}>
                    <img src={pdf} alt='icon' />
                </div>
                <div>
                    <p className='mb-0 assignment-title'>Module 1: introdoction to blockchiain technology</p>
                    <p className='mb-0 assignment-file-size'>12MB</p>
                </div>
            </div>
            <div>
                <img src={downloadIcon} alt='icon' />
            </div>

        </div>
    )
}

export default Assignment