import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './utils/index.css';
import {
	HashRouter,
	Routes,
	Route,
	withRouter
} from "react-router-dom";
import Home from './components/Home';
import Intro from './components/Intro';
import Content from './components/Content';
import { BIBLIOGRAPHY, CREDITS, HOME, INTRO, READ } from './utils/navigation';
import Essay from './components/Essay';
import { ScrollToTop } from './utils/hooks';


const credits = 
`Content and design by Gabby Eisenberg
Website by Ethan Lowenthal`;

const bibliography = <>
<a href="google.com">Link</a>
</>;

ReactDOM.render(
	<HashRouter basename='/'>
		<ScrollToTop>
			<Routes>
				<Route path={INTRO} element={<Intro />} />
				<Route path={HOME} element={<Home />} />
				<Route path={BIBLIOGRAPHY} element={<Content title='Bibliography'><div>{bibliography}</div></Content>} />
				<Route path={CREDITS} element={<Content title='Credits'><div>{credits}</div></Content>} />
				<Route path={READ}>
					<Route path=':index' element={<Essay />} />
				</Route>
			</Routes>
		</ScrollToTop>
	</HashRouter>,
	document.getElementById('root')
);
