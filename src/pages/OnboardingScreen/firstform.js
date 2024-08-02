import { useEffect, useState } from "react"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
export default function FirstForm({setCurrent}) {
    const [confirmed, setConfirmed] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if(email && password){
            setConfirmed(true)
        }else{
            setConfirmed(false)
        }
    }, [email, password]) 
    return(
        <div className="openForm">
            <div className="topper">
                <div className="firstDiv">
                     
                </div>
                <h3 onClick={() => setCurrent(0)}><FaArrowLeft className="leftarrow"/></h3>
            </div>

            <div className="stepBody">
                <div className="firstDiv">
                    <h1 style={{color: "#00002F"}}>Create Oak Account</h1>
                    <h2>Explore decentralization and have fun while at it.</h2>
                </div>
               
                <div className="inputtss">
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            {confirmed ? 
                <div onClick={() => setCurrent(2)} className="confirmation">
                    Done
                </div> :
                <div className="notconfirmation">
                    Done
                </div>
            
        }
        </div>
    )
}