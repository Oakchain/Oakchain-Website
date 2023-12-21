import React, { useState, useEffect, useRef } from "react";
import Admin from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import bit from '../../assets/images/bit.svg'
import './index.css'

const Disclaimer = () => {
  
  return (
    <Admin>
      <div className="disclaimerDiv">
        <div className="disclaimerContent">
            <div className="dCfirstCon"><h1 className="workedd">Admin Disclaimer</h1></div>
            <div className="dCsecondCon">
              <h1 className="worked"><b>Oakchain Administrators,</b></h1>
              
              <h1 className="worked">Welcome to Oakchain, where your commitment to excellence plays a pivotal role in shaping the future of our blockchain community. As stewards of this dynamic ecosystem, we emphasize the paramount importance of maintaining confidentiality and upholding the highest standards of security. This disclaimer serves as a solemn reminder of the sensitive nature of the information entrusted to you and outlines key protocols to ensure the safeguarding of our platform.</h1>
              <br />
              <h1 className="worked"><b>Confidentiality Mandate:</b></h1>
              <div className="underLine"></div><br />
              <h1 className="worked">Oakchain's success hinges on the trust our community places in us. Every administrator is hereby reminded of the strict confidentiality surrounding all aspects of their role. This includes, but is not limited to, user data, proprietary information, and the intricate workings of our blockchain technology. The essence of your role requires the utmost discretion and a profound respect for the privacy of the Oakchain community.</h1>
              <br />
              <h1 className="worked"><b>Login Credentials:
</b></h1><div className="underLine"></div><br />
              <h1 className="worked">Your Oakchain login credentials are not merely a gateway to the administrative interface; they are the keys to the kingdom of trust. Under no circumstances should any administrator share their login credentials with others. Each set of credentials is uniquely tied to an individual, and the compromise of these details can have far-reaching consequences. We implore you to treat your login credentials with the same reverence you would your personal identification documents.</h1>
              <br />
              <h1 className="worked"><b>Vigilance and Attention:</b></h1>
              <div className="underLine"></div><br />
              <h1 className="worked">As an Oakchain administrator, vigilance is not just a quality; it is a duty. The ever-evolving landscape of blockchain technology demands that you remain attentive to the subtlest nuances and potential threats. Be it in your interactions within the Oakchain community or the monitoring of system activities, your diligence is the first line of defense against any unforeseen challenges. Stay alert, stay informed, and stay committed to the principles that Oakchain stands for.</h1>
              <br />
              <h1 className="worked"><b>Peer Collaboration, not Credential Sharing:</b></h1>
              <div className="underLine"></div><br />
              <h1 className="worked">While collaboration among administrators is encouraged, the sharing of login credentials is strictly forbidden. Each administrator is a unique entity in the Oakchain system, and their actions are logged and traceable. Trust in the strength of your team, share insights, but never compromise the integrity of your login details.</h1>
              <br />
              <h1 className="worked"><b>Incident Reporting:</b></h1>
              <div className="underLine"></div><br />
              <h1 className="worked">In the unfortunate event of any suspicious activity or breach of security, Oakchain administrators are obligated to promptly report the incident to the designated security team. Time is of the essence in mitigating potential risks, and your timely reporting could be the crucial factor in safeguarding the community and the platform.</h1>
              <br />
              <h1 className="worked"><b>Legal Implications:</b></h1>
              <div className="underLine"></div><br />
              <h1 className="worked">Unauthorized access, sharing of login credentials, or any breach of confidentiality may not only result in severe consequences for the individual involved but can also have legal ramifications. Oakchain is committed to cooperating with law enforcement authorities in addressing any unlawful activities, and violators may be subject to legal action.
In conclusion, Oakchain's strength lies in the collective commitment of its administrators to uphold the highest standards of confidentiality and security. Your dedication to these principles ensures the continued success and growth of our platform. We trust that this disclaimer serves as a steadfast reminder of your responsibilities and the importance of your role in fostering a secure and thriving Oakchain community.
Thank you for your unwavering dedication and commitment.</h1>
            </div>
        </div>
      </div>
    </Admin >
  );
};

export default Disclaimer;
