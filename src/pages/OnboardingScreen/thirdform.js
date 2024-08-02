import { useEffect, useState } from "react"
import { isEqual } from 'lodash';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FaArrowLeft, FaArrowRight, FaCheck, FaCheckCircle } from "react-icons/fa"
import avatar1 from "../../assets/images/avatar1.svg"
import avatar2 from "../../assets/images/avatar2.svg"
export default function ThirdForm({setCurrent}) {
    const [confirmed, setConfirmed] = useState(false)
    
    const [avatar, setAvatar] = useState(null)
    const [showAvatars, setShowAvatars] = useState(false)
    const avatars = [
        {
            icon: avatar2,
            bgColor: "#00002F80",
        },
        {
            icon: avatar2,
            bgColor: "#FF4E0080",
        },
        {
            icon: avatar2,
            bgColor: "#FFA37A80",
        },
        {
            icon: avatar2,
            bgColor: "#ADADAD",
        },
        {
            icon: avatar2,
            bgColor: "#E27625",
        },
        {
            icon: avatar2,
            bgColor: "#00002F",
        },
        {
            icon: avatar2,
            bgColor: "#000",
        },
        {
            icon: avatar2,
            bgColor: "#f0f",
        },

    ]
    useEffect(() => {
         if(avatar){
            setConfirmed(true) 
         }else{
            setConfirmed(false)
         }
    }, [avatar ])
     
    return(
        <div className="openForm">
            <div className="topper">
                <div className="firstDiv">
                     
                </div>
                <h3 onClick={() => setCurrent(2)}><FaArrowLeft className="leftarrow"/></h3>
            </div>

            <div className="stepBody">
                <div className="firstDiv">
                    <h1 style={{color: "#00002F"}}>Upload Your Avatar</h1>
                    <h2>Select an image from our pool of avatars.</h2>
                </div>
               
                {showAvatars ? 
                    <div className="showavatar"> 
                        {avatars.map((el,l) => { 
                            return(
                            <div key={l} onClick={() => setAvatar(el)} className="avat" style={{backgroundColor: `${el.bgColor}`}}>
                                <div className="imagee" >
                                    <img alt="" src={el.icon} />
                                </div>
                                {isEqual(el,avatar) &&
                                    <div className="final">
                                        Selected <FaCheckCircle color="white" />
                                    </div>
                                }
                            </div>)})}
                    </div> 
                    :
                    <div className="avatar"> 
                    <div onClick={() => setShowAvatars(true)} className="avat">
                        <div className="image">
                            <img alt="" src={avatar1} />
                        </div>
                        <div className="selectimage">
                            Select an image
                        </div>
                    </div>
                    <div className="information">
                        <h1>
                            Are you eager to transform your expertise into earnings on the Oak&apos;s platform? Secure your spot in the spotlight with one of our exclusive 3333 rare NEST NFTs, tailored specifically for creators and educators.
                        </h1>
                        <h1>
                            Act now and claim yours today!
                        </h1>
                        <div className="buy">
                            <div className="buybutton">
                                Buy on Marketplace
                            </div>
                        </div>
                    </div>
                    </div>
                }
            </div>

            {confirmed ? 
                <div onClick={() => setCurrent(4)} className="confirmation">
                    Done
                </div> :
                <div className="notconfirmation">
                    Done
                </div>
            
        }
        </div>
    )
}