import { useState } from "react"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
export default function OpenForm({setCurrent}) {
    const [confirmed, setConfirmed] = useState(false)
    const items = [
        {
            title: "Create Oak Account",
            description: "Explore decentralization and have fun while at it.",
            step: 1
        },
        {
            title: "Create Oak Display Name",
            description: "Grab a custom name with  .oak attached to your display name. Can also serve as your in-app wallet address.",
            step: 2
        },
        {
            title: "Upload Your Avatar",
            description: "Select an image from our pool of avatars.",
            step: 3
        },
        {
            title: "Make Your First Post On Oak platform",
            description: "Say hello or something to everyone on Oak, your post are stored on the blockchain for life.",
            step: 4
        },
    ]
    return(
        <div className="openForm">
            <div className="topper">
                <div className="firstDiv">
                    <h1>Getting Started</h1>
                    <h2>Complete all the 4 Onboarding tasks and claim 100 NUTs</h2>
                </div>
                 
            </div>

            <div className="stepBody">
                {
                    items.map((el,l) => (
                        <div className="steps" key={l} onClick={() => setCurrent(el.step)}>
                            <div className="firstDiv">
                                <h1>{el.title}</h1>
                                <h2>{el.description}</h2>
                            </div>
                            <i ></i>
                            <div className="clickStep"><FaArrowRight color="white" /></div>
                        </div>
                    ))
                }
                
            </div>

            {confirmed ? 
                <div className="confirmation">
                    Claim 100 NUTs
                </div> :
                <div className="notconfirmation">
                    Claim 100 NUTs
                </div>
            
        }
        </div>
    )
}