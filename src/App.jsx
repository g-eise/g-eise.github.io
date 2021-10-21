import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Intro from './Intro';
import Game from './Game';

const states = {
	intro: 0,
	game: 1,
};

function App() {
	const [state, setState] = useState(states.intro);
	const onIntroFinish = () => {
		setState(states.game);
	}

	const renderContent = () => {
		switch(state) {
			default:
			case states.intro:
				return <Intro onFinish={onIntroFinish} />;
			case states.game:
					return <Game />;
		}
	}

	return (
		<div className="App">
			{renderContent()}
		</div>
	);
}

export default App;
