import { useState } from "react"
import "./index.css"
import OpenForm from "./openform"
import FirstForm from "./firstform"
import SecondForm from "./secondform"
import ThirdForm from "./thirdform"
import FourthForm from "./fourthform"
import Layout from "../../Layout"
export default function OnboardingScreen () {
    const [current, setCurrent] = useState(0)

return(
    <Layout >
    <div className="onboarding">
        {
            current === 0 && <OpenForm setCurrent={setCurrent} />
        }
        {
            current === 1 && <FirstForm setCurrent={setCurrent} />
        }
        {
            current === 2 && <SecondForm setCurrent={setCurrent} />
        }
        {
            current === 3 && <ThirdForm setCurrent={setCurrent} />
        }
        {
            current === 4 && <FourthForm setCurrent={setCurrent} />
        }

    </div>
    </Layout>
)
}