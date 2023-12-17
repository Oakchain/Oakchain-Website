import React, { useState, useEffect, useRef } from "react";
import Admin from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import bit from '../../assets/images/bit.svg'
import './index.css'

const Terms = () => {
  
  return (
    <Admin>
      <div className="termsDiv">
        <div className="termsContent">
            <div className="firstContt"><h1 className="termh1">Terms and Conditions</h1></div>
            <div className="secondContt"><h1 className="termh2">In engaging with OakChain's platform, you hereby affirm your explicit agreement to be contractually bound by the extensive and nuanced terms and conditions elucidated herein, encompassing a commitment to abide by all relevant legal statutes and regulations, conscientious and judicious utilization of the platform, adherence to OakChain's established policies, and understanding that any contravention of these stipulations may result in the immediate cessation of your access to OakChain; furthermore, you acknowledge and accept complete responsibility for any and all ensuing consequences, including but not limited to legal liabilities, that may arise from such non-compliance with the aforementioned terms and conditions.</h1></div>
        </div>
      </div>
    </Admin >
  );
};

export default Terms;
