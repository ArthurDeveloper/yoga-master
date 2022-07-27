import { useState } from 'react'
import Topbar from './components/Topbar/index.jsx';
import Classes from './components/Classes/index.jsx';
import AboutUs from './components/AboutUs/index.jsx';
import './App.css';

export default function App() {
	return (
		<div>
			<Topbar />
			
			<main>
				<div className="main-image" />
				<div className="title-wrapper">
					<h1 className="title">Free yoga classes</h1>
					<h3 className="subtitle">All you need is internet and motivation</h3>
				</div>

				<AboutUs />
				<Classes />
			</main>
		</div>
	)
}
