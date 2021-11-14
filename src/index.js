import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Game from './Game';
import Intro from './Intro';
import Bibliography from './Bibliography';
import Credits from './Credits';
import { BIBLIOGRAPHY, CREDITS, HOME, INTRO, READ } from './navigation';
import Content from './Content';

ReactDOM.render(
	<BrowserRouter>
	    <Routes>
			<Route path={INTRO} element={<Intro />} />
			<Route path={HOME} element={<Game />} />
			<Route path={BIBLIOGRAPHY} element={<Bibliography />} />
			<Route path={CREDITS} element={<Credits />} />
			<Route path={READ}>
				<Route path=":id" element={<Content />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
