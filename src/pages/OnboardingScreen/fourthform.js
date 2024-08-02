import { useEffect, useState } from "react"
import { isEqual } from 'lodash';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FaArrowLeft, FaArrowRight, FaCheck, FaCheckCircle, FaGift, FaImages, FaStickerMule, FaTag, FaTimes } from "react-icons/fa"
import avatar1 from "../../assets/images/avatar1.svg"
import avatar2 from "../../assets/images/avatar2.svg"
export default function FourthForm({setCurrent}) {
    const [confirmed, setConfirmed] = useState(false)
    const [image, setImage] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [showAvatars, setShowAvatars] = useState(false)
    
    useEffect(() => {
         console.log(image)
    }, [image])
     
    return(
        <div className="openForm">
            <div className="topper">
                <div className="firstDiv">
                     
                </div>
                <h3 onClick={() => setCurrent(3)}><FaArrowLeft className="leftarrow"/></h3>
            </div>

            <div className="stepBody">
                <div className="firstDiv">
                    <h1 style={{color: "#00002F"}}>Make Your First Post On Oak platform</h1>
                    <h2>Say hello or something to everyone on Oak, your post are stored on the blockchain for life.</h2>
                </div>
               
                 <div className="pushPost">
                    <div className="topDivv">

                    
                        <div className="badge">
                            <div className="initial">
                                P
                            </div>
                            <h1>
                                Patrick James
                            </h1>
                        </div>
                        <div className="timess">
                            <FaTimes color="#000" />
                        </div>
                    </div>
                    <div className="typeBody">
                        <textarea maxLength={200} placeholder="What’s happening..."></textarea>
                        {image && <div className="media">
                            <div onClick={() => setImage(null)} className="timess" style={{backgroundColor: "#00002f"}}>
                                <FaTimes color="#fff" />
                            </div>
                            <img src={image.preview} alt=""/>
                        </div>}
                    </div>
                    <div className="topDivv">
                        <div className="innerDiv">
                        <input type='file' id='prop_gallery' className='hidden' accept='image/*' 
                            onChange={(e) => {
                                const file = e?.target?.files[0];
                                if (file) {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    const url = URL.createObjectURL(file);
                                    const data = {
                                    file,
                                    preview: url,
                                    name: file.name,
                                    };
                                    setImage(data);
                                };
                                reader.readAsDataURL(file);
                                }
                            }} />
                            <label htmlFor='prop_gallery' className="iconss">
                                <FaImages color="#00002f" />
                            </label>
                            <div className="iconss">
                                <FaStickerMule color="#00002f" />
                            </div>
                            <div className="iconss">
                                <FaGift color="#00002f" />
                            </div>
                            <div className="badge">
                            <div className="initial">
                               <FaTag color="#00002f" className="fatag" />
                            </div>
                            <h1>
                                Eg: Bitcoin
                            </h1>
                        </div>
                        </div>
                        <div onClick={() => setConfirmed(true)} className="pushhhh">
                            Push
                        </div>
                    </div>
                 </div>
            </div>

            {confirmed ? 
                <div onClick={() => setCurrent(0)} className="confirmation">
                    Done
                </div> :
                <div className="notconfirmation">
                    Done
                </div>
            
        }
        </div>
    )
}