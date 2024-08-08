import React from 'react'
import { useEffect, useState } from 'react';
import "./index.css"
import Waves from 'node-waves';  

import logo from "../../assets/images/images/logo.png"
import menu from "../../assets/images/icons8-menu-192.png"
import files from "../../assets/images/icons8-documents-96.png"
import focus from "../../assets/images/icons8-focus-100.png"
import avatar from "../../assets/images/images/avatar-1.png"
import logout from "../../assets/images/icons8-logout-100black.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
const MobileSideMenu = ({openMenu, toggleMenu}) => {
    const [active, setActive] = useState()
    useEffect(() => {
       // Attach Waves effect to elements with the 'waves-effect' class
       Waves.attach('.waves-effect');
     }, []);

     const classes = [
        {
            title: "Week One",
            sub: [
                {
                    title: "Class One",
                    link: ""
                },
                {
                    title: "Button",
                    link: ""
                },
                {
                    title: "Label Badge",
                    link: ""
                },
                {
                    title: "Grid system",
                    link: ""
                },
            ]
        },
        {
            title: "Week Two",
            sub: [
                {
                    title: "Accordion",
                    link: ""
                },
                {
                    title: "Button",
                    link: ""
                },
                {
                    title: "Label Badge",
                    link: ""
                },
                {
                    title: "Grid system",
                    link: ""
                },
            ]
        },
        {
            title: "Week Three",
            sub: [
                {
                    title: "NEAR Protocol",
                    link: ""
                },
                {
                    title: "Button",
                    link: ""
                },
                {
                    title: "Label Badge",
                    link: ""
                },
                {
                    title: "Grid system",
                    link: ""
                },
                {
                    title: "Box Shadow",
                    link: ""
                },
            ]
        },
        {
            title: "Week Four",
            sub: [
                {
                    title: "NEAR Protocol",
                    link: ""
                },
                {
                    title: "Button",
                    link: ""
                },
                {
                    title: "Label Badge",
                    link: ""
                },
                {
                    title: "Grid system",
                    link: ""
                },
                {
                    title: "Box Shadow",
                    link: ""
                },
            ]
        },
     ]
    return (
        
        (openMenu && <div className='filt'>
            <aside className="main-sidebar mobileSide hidden-print">
                <section className="sidebar" id="sidebar-scroll">
                    <ul className="sidebar-menu">
                        <li className='closee'>
                            <div onClick={() => toggleMenu()}>&times;</div>
                        </li>
                        <li>
                        <Dropdown>
        <Dropdown.Toggle as="div" className="mbside profileCon drop">
          <img className="img-circle" src={avatar} style={{ width: '40px' }} alt="User Image" />
          <span>Osemu Aimiosior</span>
        </Dropdown.Toggle>
    
        <Dropdown.Menu className="mbside settings-menu">
          <Dropdown.Item href="#">
            <img className="img-fluid files-logo" src={logout} alt="Theme-logo" /> Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                        </li>
                        <li><div className='mbside connect'>Connect Wallet</div></li>
                        <li>
                                <a href="#!" role="button" aria-haspopup="true" aria-expanded="false" className="mbside downloadd">
                                <img className="img-fluid files-logo" src={files} alt="Theme-logo" />
                                    <span> Download Course Files</span>
                                </a>
                            </li>
                        <li className="nav-level">--- Main Course</li>
                        {
                            classes.map((el,l) => (
                                <Dropdown key={l} className='treeview'>
                                <Dropdown.Toggle as="div" className="courses drop">
                                   
                                  <span>{el.title}</span>
                                </Dropdown.Toggle>
                            
                                <Dropdown.Menu className="sidebarr-menu">
                                    {el.sub.map((ell,ll) => (
                                        <Dropdown.Item key={ll} href="#" className='coursesitem'>
                                            <span>{ell.title}</span>
                                        </Dropdown.Item>
                                    ))}
                                  
                                    
                                   
                                </Dropdown.Menu>
                              </Dropdown>
                                               
                            ))
                        }
                     
                        
                    </ul>
                </section>
            </aside>
            </div>)
      
    );
};

export default MobileSideMenu;
