import React from 'react'
import logo from '../../../assets/images/onLogo.svg'
import '../../../assets/style/index.css'
import duration from '../../../assets/images/duration.svg'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import truncate from 'truncate'

const Article = ({ image, id, article }) => {
    const navigate = useNavigate()
    const articleTag = ['Beginner', 'Intermediate', 'Advanced']

    return (
        <div className='oak-grid__article  bg-white h-100'
            role='button'
            onClick={
                () => {
                    navigate(`/academy/article/${article?.id}`)
                }
            }>
            <div className='oak-grid__article_img__wrapper position-relative'>
                <div className='w-100 grid-main_img h-100'>
                    <img src={image} alt='main_img' className='w-100 h-100' style={{
                        objectFit: 'cover',
                        objectPosition: 'left'
                    }} />
                </div>
            </div>
            <div className='oak-main-article_details__wrapper grid-display__type'>
                <div className='d-flex align-items-center justify-content-between mb-1'>
                    <div className='d-flex align-items-center  py-2'>
                        <div className='pe-1 oak-article_logo__wrapper'>
                            <img src={logo} alt='icon' />
                        </div>
                    </div>

                </div>
                <h3 className='oak-article__title grid-display__type '>
                    {truncate(article?.title, 27)}
                </h3>

                <div className='d-flex align-items-center justify-content-end mt-2 mb-4'>
                    {articleTag.splice(0, id).map(
                        (el, i) => <div className={`d-flex align-items-center article-tag ${i + 1 !== id ? 'me-2' : ""} tag-${i + 1}`}>
                            <p className='dot-icon  flex-shrink-0 me-2 mb-0'>
                            </p>
                            <p className='mb-0'>{el}</p>
                        </div>
                    )}

                </div>
                <p className='text-right oak-news__date mb-0 d-flex justify-content-end'>
                    {moment(article?.pubDate).format("MMM Do YY")} <span> <img src={duration} alt='icon' className='ps-2 pe-1 mb-1' />{article?.readingTime}</span>
                </p>
            </div>



        </div>

    )
}

export default Article