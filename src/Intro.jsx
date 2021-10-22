import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const IntroText = styled.h1`
    position: absolute;
    top: 40vh;
    width: 100vw;
    text-align: center;
    opacity: 1;
    margin: 0;
    transition: opacity 1s ease-in-out;
    transition-delay: 1.5s;
`;
const Backdrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #121212;
    color: white;
    user-select: none; 
    cursor: pointer;
    font-family: 'Marcellus SC', serif;
    font-size: 58px;
    .invisible {
        transition-delay: 0s !important;
        opacity: 0;
    }
`;
const introText = [
    'Hello',
    'Welcome to the',
    'Lord of the oddesy'
];

const Intro = ({ onFinish }) => {
    const [step, setStep] = useState(0);

    const goToNextStep = () => {
        if(step + 1 === introText.length) {
            setTimeout(() => {
                onFinish();
            }, 2000);
        }
        setStep(step + 1);
    }
    useEffect(() => {
        window.addEventListener('keydown', goToNextStep);
        return () => {
            window.removeEventListener('keydown', goToNextStep);
        }
    });

    return (
        <Backdrop onClick={goToNextStep}>
            {introText.map((text, idx) => <IntroText className={idx == step?'':'invisible'}>{text}</IntroText>)}
            
        </Backdrop>
    );
}

export default Intro;