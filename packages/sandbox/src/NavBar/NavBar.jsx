import React from 'react';
import Common from '../Common/_module';
import './NavBar.css';
import { useRecoilState } from 'recoil';
import { menuOpenState } from '../Common/State';

const NavBar = () => {
    const menuTab = null;
    const [menuOpen, setMenuOpen] = useRecoilState(menuOpenState);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <nav className="top-nav pw-primary">
            <div className="logo nav-link">Play What</div>
            <div className="spacer" />
            <div className="right-nav">
                <a className="icon" href="https://github.com/dan9418/play-what-sandbox" target="_blank"><Common.Icons.GitHub /></a>
                <div className={`meatball ${menuTab ? 'pw-accent' : 'pw-primary'} pw-hov`} onClick={toggleMenu} >
                    <Common.Icons.Menu />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
