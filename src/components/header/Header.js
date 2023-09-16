import React, { useState } from 'react'
import { RiMenuFill } from "react-icons/ri";
import './Header.css'

const Header = (props) => {
    const link_rig = [
        {name: 'ABOUT US',      path: '#'},
        {name: 'MENU',          path: '#'},
        {name: 'RESERVATION',   path: '#'},
    ]
    const link_lef = [
        {name: 'NEWS & EVENTS', path: '#'},
        {name: 'GALLERY',       path: '#'},
        {name: 'CONTACT',       path: '#'},
    ]
    const [scroll, setScroll] = useState(0);

    function handleScroll() {
        setScroll(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);

    const [className, setClassName] = useState('deactiveMenu');
    function showMenuMobile() {
        if (className === 'activeMenu') {
            setClassName('deactiveMenu');
        } else {
            setClassName('activeMenu');
        }
    }
    return(
        <header className={scroll > 5 ? "bg_wt" : ""}>
            <div className='header spacve'>
                <ul className={className}>
                    {link_rig.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="menu_ti">
                    <h1 className="title_res">{props.title}</h1>
                    <span className="menuicne " onClick={showMenuMobile}><RiMenuFill /></span>
                </div>
                <ul className={className}>
                    {link_lef.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='header mobacve'>
                <h1 className="title_res">{props.title}</h1>
                <div className="menu_ti">
                    <span className="menuicne " onClick={showMenuMobile}><RiMenuFill /></span>
                </div>
                <ul className={className}>
                    {link_lef.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                    {link_rig.map((link, index) => (
                        <li key={index}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header