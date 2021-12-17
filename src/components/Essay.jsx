import React from 'react';
import { useParams } from "react-router-dom";
import Content from './Content';
import { characters } from '../utils/characters';
import { useLock } from '../utils/hooks';
import { HOME } from '../utils/navigation';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const romanize = (num) => {
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
export const Arrow = (props) => {
    return <img {...props} className='arrow' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAApklEQVRIie3VsQ3CMBBG4Q9SQccIzMASIPagZQIYJjMwRygpoIOSAdJEoYBIKQIISGIKP+kv7Sef7s5EIpFmBkhCiPc4Yda3uHwkxzqEuEqKcQhxiQzTEOISV8zfHV7i8uKSb1Ng4975jZw7kNazw+STcrWZg8e8D589v0+ClXrRkbzAVkfV/Wmc2hYHWSApRl1L6+Icqz6EFRmOAnyLiT/ZCZFIOG6qFaYUmGD6UQAAAABJRU5ErkJggg=="/>
}
const BackReminder = styled.div`
    border-top: 2px solid #525252;
    padding: 1rem;
    display: flex;
    span {
        line-height: 2em;
        margin-left: 10px;
    }
`;

const Essay = (props) => {
    const { setLock, visited, setVisited, lock } = useLock();
    const { index } = useParams();
    const parsedIndex = parseInt(props.index+1 || index);
    const { header, title, photo, content } = characters[parsedIndex-1] || {};

    if (lock < parsedIndex) {
        setLock(parsedIndex);
    }
    console.log(visited)
    if (!visited.includes(parsedIndex-1)) {
        setVisited([...visited, parsedIndex-1]);
    }

    const location = useLocation();

    return (
        <Content
            image={props.noImage?false:`/images/${photo}`}
            title={title}
            header={header}
            index={parsedIndex}
            fadeIn={false}
        >
            {content}
            {
                location.pathname !== `/${HOME}` &&
                <BackReminder>
                    <Arrow />
                    <span>Click ‘back’ in the top left-hand corner and scroll down to see a new section of the Home Page!</span>
                </BackReminder>
            }

        </Content>
    )
}

export default Essay;