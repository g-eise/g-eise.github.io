import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import BackBtn from './BackBtn';
import { characters } from '../utils/characters';

const romanize = (num) => {
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = ''
    for (var i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
}

const Container = styled.div`
    animation: fade_in 1s ease-in-out;
    @keyframes fade_in {
      0%   {opacity: 0;}
      100% {opacity: 1;}
    }

    h3 {
        font-family: 'Marcellus SC';
        font-size: 200%;
        width: 100%;
        text-align: center;
    }
    .text {
        margin-top: 100px;
        width: 100%;
        p {
            font-family: 'Roboto', sans-serif;
            text-align: justify;
            ::first-letter {
                font-size: 200%;
            }
            line-height: 150%;
            font-size: 125%;
            width: 50%;
            margin: auto;
        }
    }
    .img {
        width: 100%;
        img {
            border-radius: 15px;
            display: block;
            margin: auto;
            width: 17em;
            height: 17em;
        }
    }
`;

const Content = (props) => {
    const { index } = useParams();
    const parsedIndex = parseInt(props.index || index);
    const { title, photo, text } = characters[parsedIndex-1];
    return (
        <div>
            <BackBtn />
            <Container>
                <h3>{`${romanize(parsedIndex)}. ${title}`}</h3>
                <div className='img'>
                    <img src={`/images/${photo}`} id="contentImg" />
                </div>
                <div className='text'>
                    <p>{text}</p>
                </div>
            </Container>
        </div>
    )
}

export default Content;