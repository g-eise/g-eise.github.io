import React, { useState } from 'react';
import styled from 'styled-components';

const IntroText = styled.h1`
    margin: 0;
`;
const Backdrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #121212;
    color: white;
    text-align: center;
    padding: 40vh 0;
    user-select: none; 
    cursor: pointer;
    font-family: 'Marcellus SC', serif;
    font-size: 58px;
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
            onFinish();
        } else {
            setStep(step + 1);
        }
    }

    return (
        <Backdrop onClick={goToNextStep}>
            <IntroText>{introText[step]}</IntroText>
        </Backdrop>
    );
}

export default Intro;