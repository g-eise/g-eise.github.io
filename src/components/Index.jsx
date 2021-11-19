import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Essay from './Essay';
import Home from './Home';

const Styles = styled.div`
    .top {
        z-index: 100;
    }
    > div {
        z-index: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
    }
`;
const Index = ({ page }) => {

    return (
        <Styles>
            <div className={(page === 'home'?'top':'')}>
                <Home />
            </div>
            <div className={(page === 'essay'?'top':'')}>
                <Essay />
            </div>
        </Styles>
    )

}

export default Index;