import React, { useState } from "react";
import styled, { css } from 'styled-components';
import Icon from "../../Icon";
import ButtonInput from "./ButtonInput";
import StyledCard from '../../layout/StyledCard';
import PresetAction from "../../../../components/pages/explorer/dataCol/actions/PresetAction";
import IconButton from "./IconButton";
import { MODEL } from "@pw/core/src/models/Model.constants";

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
    pathHead: any;
    onInsert?: any
}

const InsertButton: React.FC<IInsertButtonProps> = ({ pathHead, onInsert, ...rest }) => {
    const [isActive, setIsActive] = useState(false);

    const handler = presetConfig => { onInsert(presetConfig.modelValue) };

    const model = MODEL[pathHead.config.modelId]

    return (
        <StyledWrapper>
            {isActive ?
                <>
                    <StyledCard>
                        <PresetAction setPathHeadConfig={handler} validTypes={model.validChildren} />
                        <IconButton iconId="cancel" onClick={() => setIsActive(!isActive)} />
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
