import React from 'react'

const Questions = ({ id }) => {
    return (
        <div >
            <h3 className='question_title '>{`Question ${id}`}</h3>
            <div className='question-wrapper'>
                <p className='question-text mb-0'>
                    Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices.
                </p>

            </div>

        </div>
    )
}

export default Questions