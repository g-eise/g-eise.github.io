import React from 'react';
import ReactDOM from 'react-dom';
import './utils/index.css';
import {
	HashRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from './components/Home';
import Intro from './components/Intro';
import Content from './components/Content';
import { BIBLIOGRAPHY, CREDITS, HOME, INTRO, INSTRUCTIONS, METHODS, READ } from './utils/navigation';
import Essay from './components/Essay';
import { ScrollToTop } from './utils/hooks';
import styled from 'styled-components';


const credits = <>
<b>Website</b>: Ethan Lowenthal<br />
<b>Art/Research</b>: Gabrielle Eisenberg<br />
<b>Research Supervisor</b>: John Lutz and Jesse Robertson 
</>;
const SourceLink = styled.a`
	color: white !important;
`;
const SourceTitle = styled.div`
	font-weight: bold;
    margin-top: 2rem;
    text-decoration: underline;
`;
const Source = styled.div`
    margin-top: 1rem;
    margin-left: 3em;
    text-indent: -3em;
`;

const sources = {
	'Primary Consulted': [
		'Puchner, Martin, Suzanne Conklin Akbari, Wiebke Denecke, Barbara Fuchs, Caroline Levine, Pericles Lewis, Emily R. Wilson, Emily Wilson, and Caroline Alexander . “Homers Iliad .” Essay. In The Norton Anthology of World Literature A, 4th ed., A:232–324. New York, New York : W.W. Norton & Company, 2018.'
	],
	'Secondary Consulted': [
		['Allen, Walter. “The Theme of the Suitors in the Odyssey.” Transactions and Proceedings of the American Philological Association 70 (1939): 104–24.', 'https://doi.org/10.2307/283079'],
		['Fizdale, Tay. “Jonson’s Volpone and the `Real’ Antinous.” Renaissance Quarterly 26, no. 4 (1973): 454–59.','https://doi.org/10.2307/2859497'],
		[`Panajoti, Armela. 2019. ""The Lure of The Island": The Workings In Goldings's Lord of The Flies." British and American Studies 25: 97-105.`, `http://search.proquest.com.ezproxy.library.uvic.ca/scholarly-journals/lure-island-workings-power-goldings-lord-flies/docview/2253170035/se-2`]
	],
	'Primary Cited': [
		['Golding, William. Lord of The Flies, Global Village Contemporary Classics, 1953.','http://kkoworld.com/kitablar/uilyam_qoldinq_milchekler_krali-eng.pdf'],
		'Puchner, Martin, Suzanne Conklin Akbari, Wiebke Denecke, Barbara Fuchs, Caroline Levine, Pericles Lewis, Emily R. Wilson, and Emily Wilson. “Homers Odyssey.” Essay. In The Norton Anthology of World Literature A, 4th ed., A:325–602. New York, New York : W.W. Norton & Company, 2018.'
	],
	'Secondary Cited': [
		'Carlevale, John. "The Dionysian Revival in American Fiction of the Sixties." International Journal of the Classical Tradition 12, no. 3 (2006): 364-391.',
		['Flood, Michael. “Men, Sex, and Homosociality: How Bonds between Men Shape Their Sexual Relations with Women.” Men and Masculinities 10, no. 3 (April 2008): 339–59.','https://doi.org/10.1177/1097184X06287761'],
		[`Gleason, Sean Michael. 2002. "A Critical Examination of Nietzsche's Theory of Apollonian and Dionysian Duality in Two Twentieth-Century British Literary Works: Conrad's “Heart of Darkness” and Golding's “Lord of the Flies”." Order No. 1409063, California State University, Dominguez Hills.`,`http://search.proquest.com.ezproxy.library.uvic.ca/dissertations-theses/critical-examination-nietzsches-theory-apollonian/docview/230800150/se-2?accountid=14846`],
		['Jamison, Stephanie W. “Penelope and the Pigs: Indic Perspectives on the ‘Odyssey.’” Classical Antiquity 18, no. 2 (1999): 227–72.','https://doi.org/10.2307/25011102'],
		['Levine, Daniel B. “Homeric Laughter and the Unsmiling Suitors.” The Classical Journal 78, no. 2 (1982): 97–104.','http://www.jstor.org/stable/3297058'],
		[`May, Karen and David Upton. 2015. ""Ser Piggy": Identifying an Intertextual Relationship between William Golding's Lord of the Flies and George R. R. Martin's A Game of Thrones." Extrapolation. 56 (1): 63-VI.`,`http://search.proquest.com.ezproxy.library.uvic.ca/scholarly-journals/ser-piggy-identifying-intertextual-relationship/docview/1691291225/se-2?accountid=14846`],
		'Palagia, Olga, ed. Art in Athens during the Peloponnesian War. Cambridge University Press, 2009.',
		['Salih, Rifaat. "The Conflict Between Self-Interest and Collective Interest: The Historical Analysis of Golding’s Lord of The Flies." (2019).','http://docs.neu.edu.tr/library/6818668386.pdf'],
		['Scodel, Ruth. “The Suitors’ Games.” The American Journal of Philology 122, no. 3 (2001): 307–27.','http://www.jstor.org/stable/1562031'],
		['Van Vuuren, Marijke. "Good grief: Lord of the Flies as a post-war rewriting of salvation history." Literator: Journal of Literary Criticism, Comparative Linguistics and Literary Studies 25, no. 2 (2004): 1. Gale Literature Resource Center (accessed October 27, 2021).','https://link.gale.com/apps/doc/A131356398/LitRC?u=uvictoria&sid=summon&xid=162d68ae'],
		['Zink, Caroline F, Yunxia Tong, Qiang Chen, Danielle  S Bassett, Jason L Stein, and Andreas Meyer-Lindenberg. “Know Your Place: Neural Processing of Social Hierarchy in Humans.” Neuron. Cell Press, April 23, 2008.','https://www.sciencedirect.com/science/article/pii/S0896627308001128']
	]
}
const bibliography = <>{Object.entries(sources).map(([k, v]) => <><SourceTitle>{k}</SourceTitle>{v.map(n => Array.isArray(n)?<Source>{n[0]} <SourceLink target="_blank" href={n[1]}>{n[1]}</SourceLink>.</Source>:<Source>{n}</Source>)}</>)}</>

const instructions = `	To navigate yourself through this journey, the instructions are simple: click on the first unlocked icon at the bottom of the screen and read through the page. When you make it to the bottom, return to the map of the Male Social Hierarchy to unlock the next character you will meet along the way. Once the chart is complete, you can scroll down to conclude your adventure and find the concluding message of this expedition. 

	If going on a journey isn’t your thing, you can click ‘Reading Mode’ to unlock all the pages at once! 
`;

const methods = <ol type="A">
<li>I began this project by looking at the similarities and differences in the primary literary sources, Homers Odyssey, and Lord of The Flies, and finding which details overlap within these. These texts were the focal point of my research. The main details I look for include how the group is formed, who the outliers are, who the top of the hierarchy is, and what personality traits they carry. </li>
<br />
<li>After finding similarities and differences within the primary sources, I looked at scholarly articles on both these subjects and try to further my understanding of the material. I choose to do this after comparison on my own so that I can better understand the concepts and find my own understandings in the works before I look at what scholars have to say. By doing this, I have original ideas and the scholarly work helped confirm or deny hypothesis rather than other scholars ideas speaking for me in my work. This also functioned to help me find what questions I have and where to guide my research. </li>
<br />
<li>Lastly, through these two initial methods of comparison, I can compile the material in a manner that best suits my project.</li>
</ol>

ReactDOM.render(
	<HashRouter basename='/'>
		<ScrollToTop>
			<Routes>
				<Route path={INTRO} element={<Intro />} />
				<Route path={HOME} element={<Home />} />
				<Route path={INSTRUCTIONS} element={<Content title='Instructions'><div>{instructions}</div></Content>} />
				<Route path={METHODS} element={<Content title='Research Methods'><div>{methods}</div></Content>} />
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
