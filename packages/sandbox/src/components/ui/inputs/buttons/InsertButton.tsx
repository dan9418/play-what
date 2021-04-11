import { MODEL_MAP } from "@pw/core/src/models/Model.constants";
import React, { useState } from "react";
import styled, { css } from 'styled-components';
import PresetAction from "../../../../components/pages/explorer/dataCol/actions/PresetAction";
import Icon from "../../Icon";
import StyledCard from '../../layout/StyledCard';
import ButtonInput from "./ButtonInput";

const styles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
        margin: 0 32px;
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

    const model = MODEL_MAP.get(pathHead.config.modelId)

    return (
        <StyledWrapper>
            {isActive ?
                <>
                    <StyledCard>
                        <PresetAction setPathHeadConfig={handler} validTypes={model.validChildren} onCancel={() => setIsActive(false)} />
                    </StyledCard>
                </>
                :
                <>
                    <ButtonInput onClick={() => setIsActive(true)} css={styles} {...rest} >
                        <Icon iconId={'plus'} />
                    </ButtonInput>
                </>
            }
        </StyledWrapper>
    );
};

export default InsertButton;
