import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BIBLIOGRAPHY, CREDITS } from '../utils/navigation';
import { useLock } from '../utils/hooks';
import Map from './Map';
import { characters } from '../utils/characters';
import Essay from './Essay';

  
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
	.essay {
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
				text-align: justify;
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
						color: black;
						background-color: white;
					}

				}
			}
		}
	}
`;

const Home = () => {
	const { unlockAll, lock } = useLock();
	const [unlockModal, setUnlockModalOpen] = useState(false);

	return (
		<Container>
			<div className='header'>

				<div className='sidebar'>
					<Link to={`/${BIBLIOGRAPHY}`}>Bibliography</Link>
					<Link to={`/${CREDITS}`}>Credits</Link>
					{characters.length > lock && 
						<div onClick={() => setUnlockModalOpen(true)} >Reading Mode</div>
					}
				</div>
				<div className="content">
					<h3 id='title'>Lord of the Odyssey</h3>
					<Map />
				</div>
			</div>

			{characters.length <= lock && 
				<div className='essay'>
					{characters.map((_, index) => 
					<Essay key={index} index={index+1} noImage />
					)}
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
		</Container>

	);
}
export default Home;