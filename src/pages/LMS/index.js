import React from 'react'
import { useEffect, useState } from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import SideMenu from './sidebar';  
import logo from "../../assets/images/images/logo.png"
import menu from "../../assets/images/icons8-menu-192.png"
import files from "../../assets/images/icons8-documents-96white.png"
import focus from "../../assets/images/icons8-focus-100.png"
import avatar from "../../assets/images/images/avatar-1.png"
import logout from "../../assets/images/icons8-logout-100black.png"
import MobileSideMenu from './MobileSidebar';
const LMS = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  const [courseIdentifier, setcourseIdentifier] = useState([]);
  const [courseDetails, setcourseDetails] = useState([]);
    const [activeTab, setActive] = useState("home1")
  const courseData = () => {
    fetch('/Near')
    .then(res => res.json())
    .then(data => console.log(data[0]));
  }

  useEffect(() => {
    courseData();
  }, [])

    return (
        <div className="wrapper">
            <header className="main-header-top hidden-print">
                <div className='makeit'>
                <a href="index.html" className="logoooooo">
                    <img className="img-fluid able-logo" src={logo} alt="Theme-logo" />
                </a>
               
                    <ul className="top-nav lft-nav">
                        <li>
                            <a href="#!" role="button" aria-haspopup="true" aria-expanded="false" className="downloadd">
                            <img className="img-fluid files-logo" src={files} alt="Theme-logo" />
                                <span> Download Course Files</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <nav className="  navbar-static-top">
                    <div className='dashconnect'>
                        
                   <div className='connect'>Connect Wallet</div>
                   <img onClick={() => toggleFullScreen()} className="img-fluid files-logo" src={focus} alt="Theme-logo" />
                   </div>
                   <Dropdown>
    <Dropdown.Toggle as="div" className="profileCon drop">
      <img className="img-circle" src={avatar} style={{ width: '40px' }} alt="User Image" />
      <span>Osemu Aimiosior</span>
    </Dropdown.Toggle>

    <Dropdown.Menu className="settings-menu">
      <Dropdown.Item href="#">
        <img className="img-fluid files-logo" src={logout} alt="Theme-logo" /> Logout
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
                </nav>
                <div href="#!" onClick={() => toggleMenu()}   className="sidebar-logo">
                    <img className="img-fluid menu-logo" src={menu} alt="Theme-logo" />
                    </div>
            </header>
            <div className='holder'>
            <SideMenu />
            <div className="content-wrapper">
                <div className="container-fluid" style={{height: "100%"}}>
                    <div className="row">
                        <div className="main-header">
                            <h4 id="hd"></h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div>
                                <video
                                    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                                    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                                    id="localVideo"
                                    playsInline
                                    controls
                                    className='mainvideo'
                                     
                                ></video>
                            </div>
                        </div>
                        <div className="connnt">
                            <ul className="nav nav-tabs tabs" role="tablist">
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === "home1" && "active"}`} data-toggle="tab" onClick={() => setActive("home1")} role="tab">Course Overview</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === "profile1" && "active"}`} data-toggle="tab" onClick={() => setActive("profile1")} role="tab">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === "messages1" && "active"}`} data-toggle="tab" onClick={() => setActive("messages1")} role="tab">Instructor</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${activeTab === "settings1" && "active"}`} data-toggle="tab" onClick={() => setActive("settings1")} role="tab">Settings</a>
                                </li>
                            </ul>
                            <div className="tab-content tabs">
                                <div className={`tab-pane ${activeTab === "home1" && "active"}`} id="home1" role="tabpanel">
                                    <p>1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
                                </div>
                                <div className={`tab-pane ${activeTab === "profile1" && "active"}`} id="profile1" role="tabpanel">
                                    <p>2. This is Photoshop's version of Lorem Ipsum...</p>
                                </div>
                                <div className={`tab-pane ${activeTab === "messages1" && "active"}`} id="messages1" role="tabpanel">
                                    <p>3. This is Photoshop's version of Lorem Ipsum...</p>
                                </div>
                                <div className={`tab-pane ${activeTab === "settings1" && "active"}`} id="settings1" role="tabpanel">
                                    <p>4. This is Photoshop's version of Lorem Ipsum...</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            <MobileSideMenu openMenu={openMenu} toggleMenu={toggleMenu} />
        </div>
    );
};

const toggleFullScreen = () => {
    if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||    
        (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
        } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        }  
    } else {  
        if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
        } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
        } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
        }  
    }  
}

export default LMS;
