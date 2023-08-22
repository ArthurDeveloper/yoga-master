import { useState } from 'react';
import './index.css';

export default function MobileMenu() {
	const [open, setOpen] = useState(false);

	function toggle() {
		setOpen(!open);
	}

	function Burger({ color }) {
		return (
			<div className="burger-button-container" onClick={toggle}>
				<svg viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg" className="burger-button">
					<rect width="32" height="6" fill={color} />
					<rect y="12" width="32" height="6" fill={color} />
					<rect y="24" width="32" height="6" fill={color} />
				</svg>
			</div>		
		);
	}


	return (
		<div className="mobile-menu-container">
			<div className={`overlay ${open && 'overlay-open'}`} />

			<Burger color="#fff" />

			<nav className={`mobile-menu ${open && 'mobile-menu-open'}`}>
				<Burger color="#000" />

				<a className="mobile-menu-item strong-font" href="#about-us" onClick={toggle}>About us</a>
				<a className="mobile-menu-item strong-font" href="#classes" onClick={toggle}>See our classes</a>
				<a className="mobile-menu-item strong-font" href="#contact" onClick={toggle}>Get in touch</a>
			</nav>
		</div>
	);
}