import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { HOME } from "../utils/navigation";

const Button = styled.div`
    position: fixed;
    left: 20px;
    top: 30px;
    padding: 10px 36px;
    border-radius: 5px;
    background-color: #3e3e3e94;
    cursor: pointer;
    font-family: 'Poppins';
    :hover {
        background-color: white;
        color: black;
    }
`;
const BackBtn = ({ onClick }) => {
    const navigate = useNavigate()
    const goHome = () => navigate(`/${HOME}`);

    return <Button className='back-btn' onClick={onClick||goHome}>Back</Button>;

}

export default BackBtn;