import React from 'react';
import styled from 'styled-components';
import ButtonInput from '../inputs/ButtonInput';
import Card, { StyledCard } from '../ui/Card';
import Icon from '../ui/Icon';

const StyledOverlay = styled.div`
    //width: 100vw;
    //height: 100vw;
    opacity: 0.8;
    background-color: black;
    position: fixed;
    top: 48px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3000;
`

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 48px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3001;

    & > ${StyledCard} {
        margin: 16px;
        position: relative;
        padding: 64px 16px;

        overflow: auto;
        resize: both;

        .close {
            position: absolute;
            top: 16px;
            right: 16px;
            background-color: transparent !important;
        }
    }
`

const Modal: React.FC<any> = ({ setIsOpen, children, ...rest }) => {
    return (
        <>
            <StyledOverlay />
            <StyledContainer >
                <Card {...rest} draggable="true">
                    <ButtonInput onClick={() => setIsOpen(false)} className="close">
                        <Icon iconId='close' />
                    </ButtonInput>
                    {children}
                </Card>
            </StyledContainer>
        </>
    );
};

export default Modal;
