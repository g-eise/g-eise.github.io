import React from 'react';
import ReactDOM from 'react-dom';
import './utils/index.css';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Home from './components/Home';
import Intro from './components/Intro';
import Bibliography from './components/Bibliography';
import Credits from './components/Credits';
import { BIBLIOGRAPHY, CREDITS, HOME, INTRO, READ } from './utils/navigation';
import Content from './components/Content';

ReactDOM.render(
	<BrowserRouter>
	    <Routes>
			<Route path={INTRO} element={<Intro />} />
			<Route path={HOME} element={<Home />} />
			<Route path={BIBLIOGRAPHY} element={<Bibliography />} />
			<Route path={CREDITS} element={<Credits />} />
			<Route path={READ}>
				<Route path=":index" element={<Content />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
