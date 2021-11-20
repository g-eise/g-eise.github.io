import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Content from './Content';
import { characters } from '../utils/characters';
import { useLock } from '../utils/hooks';


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

const RenderHTML = (props) => (<div className='noPreWrap' dangerouslySetInnerHTML={{__html:props.HTML}}></div>)

const Essay = (props) => {
    const { setLock, lock } = useLock();
    const { index } = useParams();
    const [innerHTML, setInnerHTML] = useState('<div style="text-align:center">loading...</div>');
    const parsedIndex = parseInt(props.index || index);
    const { title, photo } = characters[parsedIndex-1] || {};

    if (lock < parsedIndex) {
        setLock(parsedIndex);
    }

    useEffect(() => {
        const { protocol, host } = window.location;
        fetch(`${protocol}//${host}/essay/${parsedIndex}.html`).then(response => {
                response.text().then(res => setInnerHTML(res)); 
            }
        ).catch(err => setInnerHTML('<div style="text-align:center">Failed to load document</div>'));
    }, []);

    return (
        <Content
            image={props.noImage?false:`/images/${photo}`}
            title={`${romanize(parsedIndex)}. ${title}`}
        >
            <RenderHTML HTML={innerHTML} />
        </Content>
    )
}

export default Essay;