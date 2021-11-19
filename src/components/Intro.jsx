import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { HOME } from '../utils/navigation';
import { useLock } from '../utils/hooks';

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
    .continueText {
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 18pt;
        position: fixed;
        right: 50px;
        bottom: 20px;
    }
`;
const introText = [
    'Hello',
    'Welcome to the',
    'Lord of the Odyssey'
];

const Intro = () => {
    const { setLock } = useLock();
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const goToNextStep = useCallback(() => {
        if(step + 1 === introText.length) {
            setTimeout(() => {
                navigate(HOME);
            }, 2000);
        }
        setStep(step + 1);
    }, [step, navigate]);

    useEffect(() => {
        setLock(0);
        sessionStorage.setItem("mapAnimated", false);
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', goToNextStep);
        return () => {
            window.removeEventListener('keydown', goToNextStep);
        }
    }, [goToNextStep]);

    return (
        <Backdrop onClick={goToNextStep}>
            {introText.map((text, idx) => <IntroText key={idx} className={idx === step?'':'invisible'}>{text}</IntroText>)}
            <div className='continueText'>Press any key to continue...</div>
        </Backdrop>
    );
}

export default Intro;