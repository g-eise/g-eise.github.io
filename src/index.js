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
import { BIBLIOGRAPHY, CREDITS, HOME, INTRO, READ } from './utils/navigation';
import Essay from './components/Essay';
import { ScrollToTop } from './utils/hooks';
import styled from 'styled-components';


const credits = <>
<b>Website</b>: Ethan Lowenthal<br />
<b>Art/Research</b>: Gabrielle Eisenberg<br />
<b>Research Supervisor</b>: John Lutz and Jesse Robertson 
</>;
const SourceTitle = styled.div`
    margin-top: 2rem;
    text-decoration: underline;
`;
const Source = styled.div`
    margin-top: 1rem;
    margin-left: 3em;
    text-indent: -3em;
`;


const bibliography = <>
<SourceTitle>Primary Consulted:</SourceTitle>
<Source>
Puchner, Martin, Suzanne Conklin Akbari, Wiebke Denecke, Barbara Fuchs, Caroline Levine, Pericles Lewis, Emily R. Wilson, Emily Wilson, and Caroline Alexander . “Homers Iliad .” Essay. In The Norton Anthology of World Literature A, 4th ed., A:232–324. New York, New York : W.W. Norton &amp; Company, 2018.
</Source>
<SourceTitle>Secondary Consulted:</SourceTitle>
<Source>Allen, Walter. “The Theme of the Suitors in the Odyssey.” Transactions and Proceedings of the American Philological Association 70 (1939): 104–24. https://doi.org/10.2307/283079.</Source>
<Source>Panajoti, Armela. 2019. ""The Lure of The Island": The Workings In Goldings's Lord of The Flies." British and American Studies 25: 97-105. http://search.proquest.com.ezproxy.library.uvic.ca/scholarly-journals/lure-island-workings-power-goldings-lord-flies/docview/2253170035/se-2.</Source>
<SourceTitle>Primary Cited:</SourceTitle>
<Source>Golding, William. Lord of The Flies, Global Village Contemporary Classics, 1953. http://kkoworld.com/kitablar/uilyam_qoldinq_milchekler_krali-eng.pdf. </Source>
<Source>Puchner, Martin, Suzanne Conklin Akbari, Wiebke Denecke, Barbara Fuchs, Caroline Levine, Pericles Lewis, Emily R. Wilson, and Emily Wilson. “Homers Odyssey.” Essay. In The Norton Anthology of World Literature A, 4th ed., A:325–602. New York, New York : W.W. Norton &amp; Company, 2018.</Source>
<SourceTitle>Secondary Cited: </SourceTitle>
<Source>Carlevale, John. "The Dionysian Revival in American Fiction of the Sixties." International Journal of the Classical Tradition 12, no. 3 (2006): 364-391.</Source>
<Source>  Flood, Michael. “Men, Sex, and Homosociality: How Bonds between Men Shape Their Sexual Relations with Women.” Men and Masculinities 10, no. 3 (April 2008): 339–59. https://doi.org/10.1177/1097184X06287761.</Source>
<Source>Gleason, Sean Michael. 2002. "A Critical Examination of Nietzsche's Theory of Apollonian and Dionysian Duality in Two Twentieth-Century British Literary Works: Conrad's “Heart of Darkness” and Golding's “Lord of the Flies”." Order No. 1409063, California State University, Dominguez Hills. http://search.proquest.com.ezproxy.library.uvic.ca/dissertations-theses/critical-examination-nietzsches-theory-apollonian/docview/230800150/se-2?accountid=14846.</Source>
<Source>Jamison, Stephanie W. “Penelope and the Pigs: Indic Perspectives on the ‘Odyssey.’” Classical Antiquity 18, no. 2 (1999): 227–72. https://doi.org/10.2307/25011102.</Source>
<Source>Levine, Daniel B. “Homeric Laughter and the Unsmiling Suitors.” The Classical Journal 78, no. 2 (1982): 97–104. http://www.jstor.org/stable/3297058</Source>
<Source>May, Karen and David Upton. 2015. ""Ser Piggy": Identifying an Intertextual Relationship between William Golding's Lord of the Flies and George R. R. Martin's A Game of Thrones." Extrapolation. 56 (1): 63-VI. http://search.proquest.com.ezproxy.library.uvic.ca/scholarly-journals/ser-piggy-identifying-intertextual-relationship/docview/1691291225/se-2?accountid=14846.</Source>
<Source>Palagia, Olga, ed. Art in Athens during the Peloponnesian War. Cambridge University Press, 2009.</Source>
<Source>Salih, Rifaat. "The Conflict Between Self-Interest and Collective Interest: The Historical Analysis of Golding’s Lord of The Flies." (2019). http://docs.neu.edu.tr/library/6818668386.pdf</Source>
<Source>Scodel, Ruth. “The Suitors’ Games.” The American Journal of Philology 122, no. 3 (2001): 307–27. http://www.jstor.org/stable/1562031</Source>
<Source>Fizdale, Tay. “Jonson’s Volpone and the `Real’ Antinous.” Renaissance Quarterly 26, no. 4 (1973): 454–59. https://doi.org/10.2307/2859497.</Source>
<Source>Van Vuuren, Marijke. "Good grief: Lord of the Flies as a post-war rewriting of salvation history." Literator: Journal of Literary Criticism, Comparative Linguistics and Literary Studies 25, no. 2 (2004): 1. Gale Literature Resource Center (accessed October 27, 2021). https://link.gale.com/apps/doc/A131356398/LitRC?u=uvictoria&sid=summon&xid=162d68ae.</Source>
<Source>Zink, Caroline F, Yunxia Tong, Qiang Chen, Danielle  S Bassett, Jason L Stein, and Andreas Meyer-Lindenberg. “Know Your Place: Neural Processing of Social Hierarchy in Humans.” Neuron. Cell Press, April 23, 2008. https://www.sciencedirect.com/science/article/pii/S0896627308001128.</Source>
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
