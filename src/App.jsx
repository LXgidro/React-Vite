import ReactLogo from './assets/logo.svg?react';
import './index.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	// Imperative
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	// Declarative/Imperative
	const formatDate = (date) => {
		// Imperative
		const day = date.getDate();
		const month = date.toLocaleString('default', { month: 'long' });
		const year = date.getFullYear();
		const time = date.toLocaleTimeString();
		// Declarative
		return `${day} ${month} ${year} | ${time}`;
	};

	// Declarative
	return (
		<div className="App">
			<header className="App-header">
				<ReactLogo className="App-logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="time-display">{formatDate(currentTime)}</div>
			</header>
		</div>
	);
};
