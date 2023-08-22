import MobileMenu from '../MobileMenu';
import './index.css';

export default function Topbar() {
    return (
        <div className="topbar">
            <h1 className="tobpar-title">YogaMaster</h1>

			<nav className="menu">
				<a className="menu-item strong-font" href="#about-us">About us</a>
				<a className="menu-item strong-font" href="#classes">See our classes</a>
				<a className="menu-item strong-font" href="#contact">Get in touch</a>
			</nav>

			<MobileMenu />
        </div>
    )
}