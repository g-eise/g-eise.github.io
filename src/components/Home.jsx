import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BIBLIOGRAPHY, CREDITS } from '../utils/navigation';
import { useLock } from '../utils/hooks';
import Map from './Map';
import { characters } from '../utils/characters';
import { romanize } from './Content';

  
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
        border-bottom: 4px solid #6a6a6a;
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

const Game = () => {
    const { unlockAll, lock } = useLock();
    const unlocked = characters.filter((_, index) => index <= lock);
    return (
        <Container>
            <div className='header'>

                <div className='sidebar'>
                    <Link to={`/${BIBLIOGRAPHY}`}>Bibliography</Link>
                    <Link to={`/${CREDITS}`}>Credits</Link>
                    <div onClick={unlockAll} >Reading Mode</div>
                </div>
                <div className="content">
                    <h3 id='title'>Lord of the Odyssey</h3>
                    <Map />
                </div>
            </div>

            <div className='essay'>
            {
                unlocked.map(({title, text}, index) => <div key={index}>
                    <h3>{`${romanize(index+1)}. ${title}`}</h3>
                    <div className="text">
                        <div>
                            {text}
                        </div>
                    </div>
                </div>
                )
            }
            </div>
        </Container>

    );
}
export default Game;