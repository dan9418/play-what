import React from 'react';

import styled from 'styled-components';
import ButtonInput from '../../shared/inputs/ButtonInput';
import Icon from '../../shared/ui/Icon';

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
