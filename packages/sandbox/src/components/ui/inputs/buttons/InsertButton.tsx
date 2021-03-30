import React, { useState } from "react";
import styled, { css } from 'styled-components';
import Icon from "../../Icon";
import ButtonInput from "./ButtonInput";
import StyledCard from '../../layout/StyledCard';

const styles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        margin: 0 16px;
    }
    svg, svg * {
        fill: white;
    }
`;

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface IInsertButtonProps {
    onInsert?: any
}

const InsertButton: React.FC<IInsertButtonProps> = ({ onInsert, ...rest }) => {
    const [isActive, setIsActive] = useState(false);


    return (
        <StyledWrapper>
            {isActive ?
                <>
                    <StyledCard onClick={() => setIsActive(!isActive)}>
                        Select type...
                    </StyledCard>
                </>
                :
                <>
                    <ButtonInput onClick={() => setIsActive(!isActive)} css={styles} {...rest} >
                        <Icon iconId={'plus'} />
                    </ButtonInput>
                </>
            }
        </StyledWrapper>
    );
};

export default InsertButton;
