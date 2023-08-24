import AuthGuard from "../../Layout/AuthGuard";
import React from 'react'
import logo from '../../assets/images/onLogo.svg'
import n1 from '../../assets/images/newsDetails.svg'
import rightArrow from '../../assets/images/rightArrow.svg'
import views from '../../assets/images/views.svg'
import share from '../../assets/images/share.svg'
import comment from '../../assets/images/comment.svg'
import user from '../../assets/images/user.svg'
import message from '../../assets/images/send.svg'
import reply from '../../assets/images/replyIcon.svg'
import { Row, Col } from 'reactstrap'
import { Grid, List } from "../../component/News";
import { arrayGenerator } from "../../utils";
import { useNavigate } from "react-router-dom";
import '../../assets/style/index.css'

const NewsDetails = () => {
    const navigate = useNavigate()
    return (
        <AuthGuard>
            <div className="oak-container-fluid">
                <p className="page-details__title">Home/News/</p>
                <div>
                    <Row>
                        <Col sm='12' md='8'>
                            <div>
                                <h4 className="news-details__title mb-0">Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur.</h4>
                                <div className="d-flex align-items-center justify-content-between mt-3 mb-4">
                                    <div className="d-flex align-items-center ">
                                        <p className="news-details__tag pe-2 mb-0">Bitcoin</p>
                                        <p className="news-details__tag mb-0">Ethereum</p>
                                    </div>
                                    <p className='text-right oak-news__date mb-0 d-flex justify-content-end'>
                                        Apr 25, 2023 . 3 min read
                                    </p>

                                </div>
                            </div>
                            <div className='oak-event__details  bg-white' >
                                <div className='oak-event__details_img__wrapper position-relative'>
                                    <div className='w-100 oak-news__details_img'>
                                        <img src={n1} alt='main_img' className='w-100 h-100' style={{
                                            objectFit: 'cover'
                                        }} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='d-flex align-items-center justify-content-between mb-1 pb-2 pt-1 mb-3'
                                        style={{
                                            borderBottom: '1px solid #d4d4d4'
                                        }}>
                                        <div className='d-flex align-items-center  py-2'>
                                            <div className='pe-1 oak-news_logo__wrapper'>
                                                <img src={logo} alt='icon' />
                                            </div>
                                            <p className='mb-0 oak-news__text pt-1'>Oak News</p>
                                        </div>
                                        <div className=' d-flex align-items-center justify-content-between'>
                                            <div className='d-flex align-items-center  py-2 pe-4'>
                                                <div className='pe-3 oak-stats__icon'>
                                                    <img src={views} alt='icon' />
                                                </div>
                                                <p className='mb-0 oak-news__stats pt-1'>1.5m</p>
                                            </div>
                                            <div className='d-flex align-items-center  py-2 pe-4'>
                                                <div className='pe-3 oak-stats__icon'>
                                                    <img src={comment} alt='icon' />
                                                </div>
                                                <p className='mb-0 oak-news__stats pt-1'>35K</p>
                                            </div>
                                            <div className='d-flex align-items-center  py-2'>
                                                <div className='pe-3 oak-stats__icon'>
                                                    <img src={share} alt='icon' />
                                                </div>
                                                <p className='mb-0 oak-news__stats pt-1'>35K</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="news-details__description">
                                        Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Orci volutpat erat feugiat accumsan facilisis a duis vestibulum fames. Fames mauris semper turpis ullamcorper blandit pulvinar quam. Aenean condimentum semper condimentum egestas metus. Orci ultrices scelerisque est lacinia. Convallis orci in etiam id malesuada nibh consectetur sit. Amet ac eu arcu cum a ultricies. Volutpat commodo donec non viverra. Molestie mattis mauris mi ultrices enim. Lectus viverra consectetur tellus tellus quam faucibus iaculis in. Quis velit quisque justo est. Pharetra at sagittis nulla dignissim egestas lacus. Sit ut id ultricies turpis. Congue elit eleifend et ultrices. Ornare venenatis eget ut nec mauris. Auctor arcu egestas eget risus sed neque elementum. Vitae vitae aliquam molestie faucibus. Amet mi vulputate egestas id netus ac. Nunc elit aliquam quis est nisl faucibus in arcu. Nulla odio dignissim semper fames blandit aliquet dictum consequat. Elementum eget adipiscing sapien blandit tortor. Nulla feugiat semper sit integer enim habitant scelerisque. Risus scelerisque convallis nisi adipiscing elementum rhoncus vestibulum molestie viverra. Ac blandit arcu eu tincidunt sit sed ut. Eu pellentesque cursus pulvinar sed imperdiet morbi. Eu et vel volutpat pharetra. Ac at mattis vitae non eu maecenas ut feugiat turpis. Euismod vulputate viverra ac pellentesque malesuada egestas. Pellentesque pulvinar laoreet faucibus vehicula massa accumsan nibh in ultricies. Cursus magna eget mollis iaculis. Commodo nunc donec quisque leo volutpat. Id donec adipiscing nisi mollis proin pretium. Purus sagittis vel in orci id at et. Vitae facilisis curabitur neque turpis convallis sodales risus nunc amet. Tempus sapien pellentesque nulla sed. Egestas praesent euismod sit quam sit. Viverra nulla ut tellus bibendum sit. Massa quis aliquet sed congue. Ac eget ornare vulputate tellus non rhoncus lectus sed. Facilisis lectus blandit cras sit. Turpis nulla enim massa nunc felis pellentesque imperdiet non at. Urna ut sit senectus blandit consectetur vitae bibendum. In ac elementum in rhoncus volutpat felis sed et aenean. Condimentum nunc libero lectus elementum a sagittis. Dui tellus leo id enim diam cras in tempus. Egestas purus sed laoreet tortor. Ipsum neque dignissim sed lacus purus massa. Facilisis turpis magna massa ornare placerat lectus diam. Felis non lorem mus sed mauris elit hac sapien. Nisi facilisis nisi ultrices risus nisi. Sed laoreet facilisis mauris ligula neque vestibulum gravida. Arcu purus sed enim tellus orci. Non tempus risus ultrices ut. Sem augue non dignissim sed enim. Lacus lectus erat nulla nec blandit bibendum at. Purus enim scelerisque adipiscing pulvinar natoque. Purus in consequat amet suscipit netus lacinia turpis eget ante. Amet quis sed in nulla magna. Elementum amet turpis eget tortor tellus odio egestas. Eget consequat sed convallis donec vitae aliquet. Id risus pellentesque et nisl ac. Ullamcorper cursus orci a sit. Id ullamcorper faucibus dolor id aenean. Duis eu libero at in tellus imperdiet erat volutpat pellentesque. In neque sed at pellentesque. Eleifend venenatis magna senectus feugiat mi vestibulum tincidunt. Dolor mi posuere eget id porta euismod sit. Cras venenatis posuere purus in parturient fermentum. Rutrum sodales morbi morbi at in nisl cursus scelerisque. Elementum pellentesque mi scelerisque risus amet nisi. Egestas aliquam in sed sed eget. Scelerisque donec nunc eu diam. Sed adipiscing tempus neque vel sit suspendisse amet a. Ut id habitasse nam purus neque enim nec. Quis id aenean hac curabitur urna fames lacus. Tincidunt cursus facilisi proin hendrerit at netus dui. Sapien in turpis dui sed phasellus sit aenean ornare gravida. Eu tempus magna tempus iaculis turpis. Consequat mauris sed nunc tristique turpis vitae ut etiam. Phasellus urna nec penatibus vitae. Sed sit ac leo lacus. Massa et leo dapibus enim nunc lorem fringilla turpis. Non ac iaculis imperdiet gravida vitae mauris ipsum sed. Ullamcorper at lobortis quis justo ut convallis mauris hac. Ullamcorper sociis maecenas et lacus platea sit purus aenean. Arcu sagittis leo lectus a dapibus facilisis feugiat porttitor amet. Cursus elementum elit et scelerisque est massa euismod purus. Semper diam phasellus aenean at pellentesque consectetur fermentum vulputate euismod. Rutrum vel lacinia diam convallis quam sed adipiscing ullamcorper. Purus lectus diam integer condimentum cras lobortis ornare nisi nulla. Morbi tristique viverra odio tristique velit scelerisque justo. Massa facilisis risus at non. Nibh gravida sit semper mattis non ac et aliquet amet. Scelerisque adipiscing tempus nunc libero augue in quam iaculis. Risus dignissim blandit bibendum ac morbi. Dictum duis sit id ornare at diam fermentum. Eu aliquam consectetur porta enim. Ultricies et amet pharetra egestas in. Odio pharetra lorem eu congue arcu. Odio id justo nisi tellus sed. Feugiat mi bibendum imperdiet ut feugiat elementum ultrices sollicitudin ultricies. Placerat tortor tellus faucibus amet leo ac aliquet in. Quis at non lectus duis rutrum iaculis orci a. Dignissim laoreet donec velit vitae. Tellus vel iaculis ultricies mattis nunc venenatis. Vivamus eu nunc molestie ipsum ut fringilla sed. Aliquam dolor praesent dui senectus. Sed et etiam turpis amet et. Purus vitae in sollicitudin sed. Dictumst sit sit lorem dui turpis sapien libero aenean. Tellus vestibulum ac proin elementum lacus nunc fermentum praesent dapibus. Odio blandit sed lacus vitae pellentesque ultrices ut pellentesque ornare. Arcu leo elementum quam eleifend. Aliquam vestibulum amet mauris proin. At tortor dignissim curabitur in. Volutpat viverra gravida malesuada eget ac in tristique amet. Habitasse suspendisse lectus magnis ut semper elit. Diam eget eget quis arcu. Bibendum arcu nam vulputate condimentum nunc arcu sem fermentum. Ultrices at nulla nisl et. Adipiscing amet cursus urna urna massa faucibus congue at. Est bibendum aliquam pulvinar id. Nulla vulputate quam sed amet. Porta urna euismod dolor adipiscing eget. Elementum placerat montes magnis ut nulla aliquet. Etiam urna tellus viverra donec facilisi id. In aenean augue enim habitant ut leo nisl ullamcorper. Cras pellentesque viverra habitant eget lacus curabitur fames aliquet sed. Diam egestas diam venenatis aenean nulla.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <div className=" d-flex align-items-center news-details__comment_wrapper">
                                        <div className="news-details__user_dp">
                                            <img src={user} alt='user' />
                                        </div>
                                        <input className="w-100 px-2" placeholder="Add a comment" />
                                        <div className="message-icon__wrapper d-flex align-items-center justify-content-center">
                                            <img src={message} alt='icon' />
                                        </div>

                                    </div>

                                </div>
                                <div className="mb-5">
                                    <h3 className="mb-0 news-comments_text mb-4">Comments</h3>
                                    <div className="news-comment d-flex">
                                        <div className="news-details__user_dp pe-4">
                                            <img src={user} alt='user' />
                                        </div>
                                        <div>
                                            <p className="news-comment mb-2">
                                                Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices.
                                            </p>
                                            <div className="d-flex align-items-center">
                                                <div className="pe-2 d-flex align-items-center">
                                                    <img src={reply} alt='icon' className="pe-1" />
                                                    <p className="mb-0 news-comment__intent">Reply</p>
                                                </div>
                                                <p className="px-2 mb-0 news-comment__intent border-left">View Replies</p>

                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>

                        </Col>
                        <Col sm='12' md='4' className="d-none d-md-block">
                            <div className=" d-flex align-items-center justify-content-between mb-4">
                                <h5 className="oak-section__title">Related News</h5>
                                <div className="d-flex align-items-center" role='button'>
                                    <p className="oak-redirect__text mb-0 pe-3"></p>
                                </div>
                            </div>
                            {
                                arrayGenerator(4).map(el =>
                                    <div className='mb-3'>
                                        <List type={'all-news'} />
                                    </div>
                                )
                            }
                            <div className="d-flex align-items-center justify-content-end" role='button'
                                onClick={() => {
                                    navigate('/news')
                                }}
                            >
                                <p className="oak-redirect__text mb-0 pe-3">See all</p>
                                <div>
                                    <img src={rightArrow} alt='icon' />
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <div>
                        <div className=" d-flex align-items-center justify-content-between mb-4">
                            <h5 className="oak-section__title">Related News</h5>
                            <div className="d-flex align-items-center" role='button'>
                                <p className="oak-redirect__text mb-0 pe-3"></p>
                            </div>
                        </div>
                        <div className='d-flex d-md-none align-items-center flex-nowrap trending-mobile__list'>
                            <List />
                            <List />
                            <List />
                        </div>
                    </div>


                    <div>
                        <div className=" d-flex align-items-center justify-content-between mb-4">
                            <h5 className="oak-section__title">Also See</h5>
                            <div className="d-flex align-items-center" role='button'>
                                <p className="oak-redirect__text mb-0 pe-3"></p>
                            </div>
                        </div>

                        <Row className='g-3 d-none d-md-block'>
                            {arrayGenerator(4).map(el =>
                                <Col md='4' lg='3' sm='12'>
                                    <Grid />
                                </Col>)
                            }
                        </Row>

                        <div className='d-flex d-md-none align-items-center flex-nowrap trending-mobile__list'>
                            <Grid />
                            <Grid />
                            <Grid />
                        </div>

                    </div>


                </div>
            </div>
        </AuthGuard>
    )
}

export default NewsDetails