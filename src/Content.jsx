import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

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
  
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const characters = [
    {
        id: '1',
        title: 'Introduction',
        photo: 'face.jpg',
        text: loremIpsum
    },

];

const Container = styled.div`
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

const Content = ({}) => {
    let params = useParams();
    console.log()
    return (
        <div>
            {characters.map((character, index) => (
                <Container>
                    <h3>{`${romanize(index + 1)}. ${character.title}`}</h3>
                    <div className='img'>
                        <img src={`/images/${character.photo}`} />
                    </div>
                    <div className='text'>
                        <p>{character.text}</p>
                    </div>
                </Container>
            ))}
        </div>
    )
}

export default Content;