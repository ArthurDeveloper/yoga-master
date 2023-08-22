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
			
			<main>
				<header className="title-wrapper">
					<h1 className="title">Free yoga classes</h1>
					<h3 className="subtitle">All you need is an internet connection and motivation</h3>
				</header>
				<div className="main-image" />

				<AboutUs />
				<Classes />
				<Contact />
				<Footer />
			</main>
		</div>
	)
}
