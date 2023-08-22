import { useState } from 'react'
import Topbar from './components/Topbar';
import Classes from './components/Classes';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
	return (
		<div>
			<Topbar />	
			
			<header className="main-header">
				<div className="title-wrapper">
					<h1 className="title">Free yoga classes</h1>
					<h2 className="subtitle">All you need is an internet connection and motivation</h2>
				</div>
				<img className="main-image" src="/yoga-poses.png" />
			</header>

			<main>
				<AboutUs />
				<Classes />
				<Contact />
				<Footer />
			</main>
		</div>
	)
}
