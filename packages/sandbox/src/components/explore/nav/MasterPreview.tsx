import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { detailsState } from '../../../state/state';
import THEME from '../../../styles/theme';

export const StyledMasterPreview = styled.h1`
    text-align: left;
    width: 100%;
    height: 100%;
    white-space: nowrap;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .title {
        color: ${THEME.text.dark};
        //padding-bottom: 4px;
    }

    .subtitle {
        color: ${THEME.text.medium};
        font-size: 80%;
        font-weight: normal;
    }
`;

const MasterPreview: React.FC = () => {

    // @ts-ignore
    const [details, setDetails] = useRecoilState(detailsState);

    return (
        <StyledMasterPreview>
            <div className="title">{details.notes.formattedName}</div>
            <div className="subtitle">{details.notes.preview}</div>

        </StyledMasterPreview>
    )
}

export default MasterPreview;
