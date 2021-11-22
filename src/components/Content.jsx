import React from 'react';
import styled from 'styled-components';
import BackBtn from './BackBtn';
import { useLocation } from 'react-router-dom'
import { HOME } from '../utils/navigation';

const Container = styled.div`
    /* animation: fade_in .5s ease-in-out; */
    h3 {
        font-family: 'Marcellus SC';
        font-size: 200%;
        width: 100%;
        span {
            position: relative;
            display: block;
            overflow: hidden;
            width: fit-content;
            margin: auto;
        }
    }
    .text {
        margin-top: 100px;
        width: 100%;
        > div {
            font-family: 'Poppins',sans-serif !important;
            text-align: justify;
            font-size: 12pt !important;
            width: 70%;
            margin: auto;
            white-space: pre-wrap;
        }
        .noPreWrap {
            white-space: normal !important;
        }
        .noPreWrap > * {
            white-space: normal;
 
        }
        margin-bottom: 100px;
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
    a {
        color: #6eaee7;
        :visited {
            color: #ad91ff;
        }
        :any-link {
            text-decoration: none;
        }
    }
`;

const Content = ({title, image, children}) => {
    const location = useLocation();
    return (
        <div>
             {location.pathname !== `/${HOME}` && <BackBtn />}
             <Container>
                 {title && <h3><span>{title}</span></h3>}
                 {image && <div className='img'>
                     <img alt='character' src={image} id="contentImg" />
                 </div>}
                 <div className='text'>
                    {children}
                 </div>
             </Container>
         </div>  
    );
}

export default Content;