import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { BIBLIOGRAPHY, CREDITS, INSTRUCTIONS, METHODS, READ } from '../utils/navigation';
import { useLock } from '../utils/hooks';
import Map from './Map';
import { characters } from '../utils/characters';
import Essay, { Arrow } from './Essay';

  
const Container = styled.div`
	animation: fade_in .5s ease-in-out;
	@keyframes fade_in {
	  0%   {opacity: 0;}
	  100% {opacity: 1;}
	}
	overflow: hidden;
	.header {
		display: flex;
		width: 100vw;
		height: 100vh;
		.sidebar {
			width: 27ch;
			padding: 21px 0px;
			font-size: 1em;
			font-family: 'Poppins', sans-serif;
			box-shadow: inset -29px 0 14px -15px #0c0c0c;
			> div, > a {
				display: flex;
				color: white;
				text-decoration: none;
				margin: 0px 30px 0px 20px;
				padding: 15px 20px;
				cursor: pointer;
				border-radius: 5px;
				:hover {
					background-blend-mode: darken;
					color: black;
					background-color: white;
				}
			}
		}
		canvas {
			width: 100%;
		}
		#title {
			margin-bottom: .3em;
			text-align: center;
			font-size: 4em;
			font-weight: 300;
			font-family: 'Marcellus SC';
		}
		.content {
			background-color: #121212;
			color: white;
			flex: 1;
			display: flex;
			flex-direction: column;            
		}
	}
	.conclusion {
		border-top: 4px solid #6a6a6a;
		h3 {
			font-family: 'Marcellus SC';
			font-size: 200%;
			width: 100%;
			text-align: center;
		}
		.text {
			margin-top: 100px;
			width: 100%;
			> div {
				font-family: 'Poppins',sans-serif;
				text-align: left;
				font-size: 100%;
				width: 70%;
				margin: auto;
				white-space: pre-wrap;
			}
			margin-bottom: 100px;
		}
	}
`;

const Modal = styled.div`
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000000a0;
	}
	.modal-body {
		position: fixed;
		top: 10vh;
		width: 100vw;
		pointer-events: none;
		> div {
			pointer-events: all;
			margin: auto;
			max-width: 35vw;
			background: #121212;
			padding: 17px 35px 35px 35px;
			border-radius: 5px;
			box-shadow: 0px 0px 18px 5px #000000;
			font-family: 'Poppins', sans-serif;
			.buttons {
				display: flex;
				justify-content:flex-end;
				margin-top: 35px;
				.button {
					cursor: pointer;
					background-color: #282828;
					color: white;
					padding: 7px 15px;
					cursor: pointer;
					border-radius: 5px;
					margin-left: 16px;
					:hover {
						background-blend-mode: darken;
						color: #121212;
						background-color: white;
					}

				}
			}
		}
	}
`;

const NoScroll = createGlobalStyle`
	html, body {
		margin: 0 !important;
		height: 100% !important;
		overflow: hidden !important;
	}
`
const EssayTransitionContainer = styled.div`
	
	.essay-transition-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #1a1a1a;
		animation: fade_in 1s ease-in-out;
	}
	.essay-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		animation: fade_in 1s ease-in-out;

		/* opacity: 0; */
		/* pointer-events: none; */
		@keyframes a-ltr-after{
			0% {transform: translateX(-100%)}
			100% {transform: translateX(101%)}
		}

		@keyframes a-ltr-before{
			0% {transform: translateX(0)}
			100% {transform: translateX(200%)}
		}

		h3>span::after{
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: white;
			animation: a-ltr-after 2s cubic-bezier(.77,0,.18,1) forwards;
			transform: translateX(-101%);
			animation-delay: 2s;
		}

		h3>span::before{
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background: #1a1a1a;
			animation: a-ltr-before 2s cubic-bezier(.77,0,.18,1) forwards;
			transform: translateX(0);
			animation-delay: 2s;
		}

		.img {
			opacity: 0;
		}
		@keyframes fade_inl {
			0%   {opacity: 0;}
			66%   {opacity: 0;}
			100% {opacity: 1;}
		}
		.text, .back-btn {
			animation: fade_inl 3s ease-in-out;
		}

	}

	.transition-img {
		object-fit: cover;
		position: fixed;
		border-radius: 5px;
	}
`;

const ConclusionReminder = styled.div`
	cursor: pointer;
	display: flex;
	position:absolute;
	right: 30px;
	bottom: 20px;
	font-family: 'Marcellus SC';
	font-size: 24px;
`;

const EsssayTransition = ({ index }) => {
	const navigate = useNavigate();
	const { photo } = characters[index];
	const imageRef = useRef(null);

	useEffect(() => {
			const start = document.getElementById(`photo-${index}`);
			const target = document.querySelector('.img>img');
			const image = imageRef.current;

			if (start && target && image) {
				const startRect = start.getBoundingClientRect();
				const targetRect = target.getBoundingClientRect();

				image.style.top = startRect.top+'px';
				image.style.left = startRect.left+'px';
				image.style.width = startRect.width+'px';
				image.style.height = startRect.height+'px';

				image.style.transition = 'all 1s';

				setTimeout(() => {
					image.style.top = targetRect.top+'px';
					image.style.left = targetRect.left+'px';
					image.style.width = targetRect.width+'px';
					image.style.height = targetRect.height+'px';
					image.style.borderRadius = '15px';

					setTimeout(() => {
						navigate(`/${READ}/${index+1}`);
					}, 3000);
				}, 1000);
			}
	}, []);

	return (<EssayTransitionContainer>
		<NoScroll />
		<div className='essay-transition-background' />
		<div className='essay-container'>
			<Essay index={index} />;
		</div>
		<img className='transition-img' ref={imageRef} src={`/images/${photo}`}></img>
	</EssayTransitionContainer>)
}

const Home = () => {
	const { unlockAll, lock } = useLock();
	const [unlockModal, setUnlockModalOpen] = useState(false);
	const [transitionToEssay, setTransitonToEssay] = useState(undefined);

	return (
		<Container>
			<div className='header'>

				<div className='sidebar'>
					<Link to={`/${INSTRUCTIONS}`}>Instructions</Link>
					<Link to={`/${METHODS}`}>Methods</Link>
					<Link to={`/${BIBLIOGRAPHY}`}>Bibliography</Link>
					<Link to={`/${CREDITS}`}>Credits</Link>
					{(characters.length-1) > lock && 
						<div onClick={() => setUnlockModalOpen(true)} >Reading Mode</div>
					}
				</div>
				<div className="content">
					<h3 id='title'>Lord of the Odyssey</h3>
					<Map goToEssay={setTransitonToEssay} />
					{(characters.length-1) <= lock && 
						<ConclusionReminder
							onClick={()=>document.querySelector('.conclusion').scrollIntoView({ behavior: 'smooth', block: 'start' })}
						>
							<span style={{lineHeight: '2em'}}>Conclusion</span>
							<Arrow style={{transform: 'rotate(90deg)'}} />
						</ConclusionReminder>
					}
				</div>
			</div>

			{(characters.length-1) <= lock && 
				<div className='conclusion'>
					<Essay index={characters.length-1} noImage />
				</div>
			}

			{unlockModal && <Modal>
					<div className='backdrop' onClick={() => setUnlockModalOpen(false)} />
					<div className='modal-body'>
						<div>
							<h2>Enable Reading Mode?</h2>
						Are you sure you want to enable reading mode and unlock all of the characters? You won't be able to play through the game.
						<div className='buttons'>
							<div className='button' onClick={() => setUnlockModalOpen(false)} >cancel</div>
							<div className='button' onClick={() => {unlockAll();setUnlockModalOpen(false)}} >unlock</div>
						</div>
						</div>
					</div>
				
				</Modal>}
			
			{!isNaN(transitionToEssay) && <EsssayTransition index={transitionToEssay} />}
		</Container>

	);
}
export default Home;