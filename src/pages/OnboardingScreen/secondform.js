import { useEffect, useState } from "react"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa"
export default function SecondForm({setCurrent}) {
    const [confirmed, setConfirmed] = useState(false)
    
    const [name, setName] = useState("")
    const [available, setAvailable] = useState(true)

    useEffect(() => {
        if(name && available){
            setConfirmed(true)
        }else{
            setConfirmed(false)
        }
    }, [name, available])
     
    return(
        <div className="openForm">
            <div className="topper">
                <div className="firstDiv">
                     
                </div>
                <h3 onClick={() => setCurrent(1)}><FaArrowLeft className="leftarrow"/></h3>
            </div>

            <div className="stepBody">
                <div className="firstDiv">
                    <h1 style={{color: "#00002F"}}>Create Oak Display Name</h1>
                    <h2>Grab a custom name with  .oak attached to your display name. Can also serve as your in-app wallet address.</h2>
                </div>
               
                <div className="availl">
                    <div className="availableName">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> 
                        <div className="barri"></div>
                        .oak
                    </div>

                    {
                        available &&
                            <div className="status">
                                Available
                                <div className="statusCheck">
                                    <FaCheck color="#FF4E00" />
                                 </div>
                            </div>
                    }
                </div>
            </div>

            {confirmed ? 
                <div onClick={() => setCurrent(3)} className="confirmation">
                    Done
                </div> :
                <div className="notconfirmation">
                    Done
                </div>
            
        }
        </div>
    )
}