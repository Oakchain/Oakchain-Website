import AuthGuard from "../../../Layout/AuthGuard";
import React, { useEffect, useState } from 'react'
import n1 from '../../../assets/images/art1.svg'
import oak from '../../../assets/images/oakMini.svg'

import { Row, Col } from 'reactstrap'

import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleArticlesQuery } from "../../../client/Hook/Articles";
import moment from 'moment'


const ArticleDetails = () => {
    const navigate = useNavigate()
    const params = useParams()
    const { id } = params
    // console.log(id)
    const articleTag = ['Beginner', 'Intermediate', 'Advanced']

    const { article,
        error,
        isLoading } = useGetSingleArticlesQuery(id)


    const [filteredHtmlString, setFilteredHtmlString] = useState('');

    useEffect(() => {
        if (article) {

            const parser = new DOMParser();
            const doc = parser.parseFromString(article?.description, 'text/html');

            const imgElement = doc.querySelector('img');
            if (imgElement) {
                imgElement.remove();
            }

            const modifiedHtmlString = new XMLSerializer().serializeToString(doc);

            setFilteredHtmlString(modifiedHtmlString);
        }

    }, [article]);

    return (
        <AuthGuard>
            <div className="oak-container-fluid">
                <p className="page-details__title">Home/Academy/Courses</p>
                <div>
                    <h4 className="news-details__title mb-0">{article?.title}</h4>

                    <Row>
                        <Col sm='12' md='12'>
                            <div>
                                <div className="d-flex align-items-center justify-content-between mt-3 mb-4">
                                    <div className="d-flex align-items-center flex-wrap">
                                        {
                                            article?.categories?.map(el => <p className="news-details__tag pe-2 mb-0">{el}</p>)
                                        }

                                        {/* <p className="news-details__tag mb-0">Ethereum</p> */}
                                    </div>
                                    <p className='text-right oak-news__date mb-0 d-flex justify-content-end'>
                                        { }
                                        {`${moment(article?.pubDate).format("MMM Do YY")} . ${article?.readingTime}`}
                                        {/* Apr 25, 2023 . 3 min read */}
                                    </p>

                                </div>
                            </div>
                            <div className='oak-event__details  bg-white' >
                                <div className='oak-event__details_img__wrapper position-relative mb-3'>
                                    <div className='w-100 oak-news__details_img'>
                                        <img src={article?.thumbnail} alt='main_img' className='w-100 h-100' style={{
                                            objectFit: 'cover',
                                            objectPosition: 'left'
                                        }} />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center oak-mb">
                                    {articleTag.splice(0, 2).map(
                                        (el, i) => <div className={`d-flex align-items-center article-tag ${i + 1 !== 2 ? 'me-2' : ""} tag-${i + 1}`}>
                                            <p className='dot-icon  flex-shrink-0 me-2 mb-0'>
                                            </p>
                                            <p className='mb-0'>{el}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="oak-mb oak-medium-description" dangerouslySetInnerHTML={{ __html: filteredHtmlString }} >
                                    {/* {article?.description} */}
                                    {/* <h4 className='oak-article-title'>Lorem ipsum dolor sit amet ipsum dolor sit amet</h4>
                                    <p className="news-details__description">
                                    </p> */}
                                </div>
                                <div className="oak-mb">
                                    {/* <h4 className='oak-article-title'>Lorem ipsum dolor sit amet ipsum dolor sit amet</h4>
                                    <p className="news-details__description">
                                        Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Orci volutpat erat feugiat accumsan facilisis a duis vestibulum fames. Fames mauris semper turpis ullamcorper blandit pulvinar quam. Aenean condimentum semper condimentum egestas metus. Orci ultrices scelerisque est lacinia. Convallis orci in etiam id malesuada nibh consectetur sit. Amet ac eu arcu cum a ultricies. Volutpat commodo donec non viverra. Molestie mattis mauris mi ultrices enim. Lectus viverra consectetur tellus tellus quam faucibus iaculis in. Quis velit quisque justo est. Pharetra at sagittis nulla dignissim egestas lacus. Sit ut id ultricies turpis. Congue elit eleifend et ultrices. Ornare venenatis eget ut nec mauris. Auctor arcu egestas eget risus sed neque elementum. Vitae vitae aliquam molestie faucibus. Amet mi vulputate egestas id netus ac. Nunc elit aliquam quis est nisl faucibus in arcu. Nulla odio dignissim semper fames blandit aliquet dictum consequat. Elementum eget adipiscing sapien blandit tortor. Nulla feugiat semper sit integer enim habitant scelerisque. Risus scelerisque convallis nisi adipiscing elementum rhoncus vestibulum molestie viverra. Ac blandit arcu eu tincidunt sit sed ut. Eu pellentesque cursus pulvinar sed imperdiet morbi. Eu et vel volutpat pharetra. Ac at mattis vitae non eu maecenas ut feugiat turpis. Euismod vulputate viverra ac pellentesque malesuada egestas. Pellentesque pulvinar laoreet faucibus vehicula massa accumsan nibh in ultricies. Cursus magna eget mollis iaculis. Commodo nunc donec quisque leo volutpat. Id donec adipiscing nisi mollis proin pretium. Purus sagittis vel in orci id at et. Vitae facilisis curabitur neque turpis convallis sodales risus nunc amet.
                                    </p> */}
                                </div>





                            </div>

                        </Col>
                        <Col sm='12' md='3' className="d-none">
                            <div className=" d-flex align-items-center justify-content-between mb-4">
                                <h5 className="oak-section__title mb-3">Table of Content</h5>
                                <div className="d-flex align-items-center" role='button'>
                                    <p className="oak-redirect__text mb-0 pe-3"></p>
                                </div>
                            </div>
                            <div className="oak-mb">
                                <div class="timeline oak-mb pb-3">
                                    <div class="timeline-item">
                                        <div class="timeline-dot active "></div>
                                        <div class="timeline-content start-item active">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet
                                            </p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div><div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div><div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div><div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-dot"></div>
                                        <div class="timeline-content">
                                            <p className="mb-0">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="oak-reward__container d-flex align-items-center justify-content-center">
                                    <div>
                                        <div className="oak-reward__section">
                                            <div className="w-100 text-center mb-3">
                                                <img src={oak} alt='icon' />
                                            </div>
                                            <h3 className="oak-reward__text mb-3">
                                                +32 oak nuts to be claimed at the end of this course
                                            </h3>
                                        </div>

                                        <div className="text-center">
                                            <button className='oak-btn oak-tertiary-btn btn mt-3'>
                                                Claim Reward
                                            </button>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </Col>

                    </Row>




                </div>
            </div>
        </AuthGuard>
    )
}

export default ArticleDetails