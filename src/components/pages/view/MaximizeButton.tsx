import React from 'react';
import ButtonInput from "../../inputs/ButtonInput";
import Icon from "../../ui/Icon";
import styled from 'styled-components';

const StyledMaximizeButton = styled(ButtonInput)`
    background-color: transparent !important;
`

const MaximizeButton = props => {
    return (
        <StyledMaximizeButton {...props}>
            <Icon iconId="maximize" size={24} />
        </StyledMaximizeButton>
    );
}

export default MaximizeButton;
