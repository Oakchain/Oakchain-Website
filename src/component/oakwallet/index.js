import React, { useState, useEffect } from 'react'
import { Modal, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import oak from '../../assets/images/userP/oak.svg'
import plus from '../../assets/images/userP/plus.svg'
import send from '../../assets/images/userP/send.svg'
import swap from '../../assets/images/userP/swap.svg'
import scan from '../../assets/images/userP/scan.svg'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fatimess from '../../assets/images/userP/fatimess.svg'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import classnames from 'classnames';
const OakWallet = ({ isWOpen, toggle }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Modal isOpen={isWOpen} toggle={toggle} className='modal-dialog-centered' modalClassName='oak-modal__card'>
      <div className='Top'>
        <div className='accountTopp'>
          <h3>Oak Wallet</h3>
          <button onClick={toggle}>
            <img src={fatimess} alt='times' />
          </button>
        </div>
        <div className='oakC'><img src={oak} alt='oak'></img><h3>Oak Nuts</h3></div>
        <h3 className='amounT'>11.4563 </h3>
        <div className='buttonss'>
          <div className='btnHolder'>
            <div><button><img src={plus} alt='buy'></img></button> <h3>Buy</h3></div>
            <div><button><img src={send} alt='send'></img></button> <h3>Send</h3></div>
            <div><button><img src={swap} alt='swap'></img> </button><h3>Swap</h3></div>
            <div><button><img src={scan} alt='scan'></img> </button><h3>Scan</h3></div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <Nav className='nab' tabs>
          <NavItem className='tab'>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => toggleTab('1')}
            >
              Transactions
            </NavLink>
          </NavItem>
          <NavItem className='tab'>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => toggleTab('2')}
            >
              Tokens
            </NavLink>
          </NavItem>
          <NavItem className='tab'>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => toggleTab('3')}
            >
              NFTs
            </NavLink>
          </NavItem>
        </Nav>
        <div className="active-bar" style={{ left: `${(parseInt(activeTab) - 1) * 33.3333}%` }}></div>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane className='detailTab' tabId='1'>
          {<div className='trans'>
            <h3>No Recent Transactions</h3></div>}
        </TabPane>
        <TabPane className='detailTab' tabId='2'>
          {<div className='tokens'>
            <h3>No Tokens</h3></div>}
        </TabPane>
        <TabPane className='detailTab' tabId='3'>
          {<div className='nft'>
            <h3>Oops... No NFTs yet</h3></div>}
        </TabPane>
      </TabContent>
    </Modal>
  );
};

export default OakWallet