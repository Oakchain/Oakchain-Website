import React, { useContext} from 'react'
import binance from '../../assets/images/ts1.svg'
import ts2 from '../../assets/images/tsk2.svg'
import ts3 from '../../assets/images/tsk3.svg'
import ts4 from '../../assets/images/tsk4.svg'
import ts5 from '../../assets/images/tsk5.svg'
import ts2Dark from '../../assets/images/ts2Dark.svg';
import ts3Dark from '../../assets/images/ts3Dark.svg';
import ts4Dark from '../../assets/images/ts4Dark.svg';
import ts5Dark from '../../assets/images/ts5Dark.svg';
import { ThemeContext } from '../../App'
import './index.css'
import '../../assets/style/index.css'

const Tasks = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className='oak-task_card'>
            <div className='d-flex align-items-center mb-3'>
                <div className='pe-2'>
                    <img src={binance} alt='logo' />
                </div>
                <p className='oak-task-brand mb-0'>
                    Binance
                </p>
            </div>
            <h3 className='oak-task-title '>Binance pizza campaign</h3>
            <p className=' oak-task__description'>Lorem ipsum dolor sit amet consectetur. Amet vitae platea lorem id blandit dictum ipsum nulla venenatis. At lorem egestas id ultricies non diam molestie. In enim accumsan imperdiet pellentesque porta sit volutpat euismod at. Ut lacus facilisi sagittis pharetra sem purus ipsum lectus. Imperdiet nulla pellentesque purus vulputate et a.</p>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center  py-2 pe-3'>
                        <div className='pe-2 oak-stats__icon'>
                            <img src={theme === 'dark' ? ts2Dark : ts2} alt='icon' />
                        </div>
                        <p className='mb-0 oak-news__stats pt-1'>54k</p>
                    </div>
                    <div className='d-flex align-items-center  py-2 pe-3'>
                        <div className='pe-2 oak-stats__icon'>
                        <img src={theme === 'dark' ? ts3Dark : ts3} alt='icon' />
                        </div>
                        <p className='mb-0 oak-news__stats pt-1'>28</p>
                    </div>
                    <div className='d-flex align-items-center  py-2 pe-3'>
                        <div className='pe-2 oak-stats__icon'>
                        <img src={theme === 'dark' ? ts4Dark : ts4} alt='icon' />
                        </div>
                    </div>
                    <div className='d-flex align-items-center  py-2 pe-3'>
                        <div className='pe-1 oak-stats__icon'>
                        <img src={theme === 'dark' ? ts5Dark : ts5} alt='icon' />
                        </div>
                        <p className='mb-0 oak-news__stats pt-1'></p>
                    </div>

                </div>
                <div className=''>
                    <button className='oak-btn px-md-5 px-4 w-100'>
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tasks