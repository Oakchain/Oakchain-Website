import React from 'react'
import { useEffect, useState } from 'react';
import "./index.css"
import Waves from 'node-waves';  

import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
const SideMenu = () => {
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
        <aside className="main-sidebar hidden-print">
            <section className="sidebar" id="sidebar-scroll">
                <ul className="sidebar-menu">
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
    );
};

export default SideMenu;
