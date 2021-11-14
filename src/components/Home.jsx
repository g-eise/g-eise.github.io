import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BIBLIOGRAPHY, CREDITS } from '../utils/navigation';
import Map from './Map';

  
const Container = styled.div`
    animation: fade_in 1s ease-in-out;
    @keyframes fade_in {
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }
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
`;

const Game = ({}) => {
    return (
        <Container>
            <div className='sidebar'>
                <Link to={`/${BIBLIOGRAPHY}`}>Bibliography</Link>
                <Link to={`/${CREDITS}`}>Credits</Link>
                <div>Reading Mode</div>
            </div>
            <div className="content">
                <h3 id='title'>Lord of the Odyssey</h3>
				<Map />
			</div>
        </Container>
    );
}
export default Game;