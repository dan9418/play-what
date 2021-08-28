import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { detailsState } from '../../../state/state';
import THEME from '../../../styles/theme';

export const StyledMasterPreview = styled.h1`
    text-align: left;
    width: 100%;
    padding: 0 64px 0 16px;
    white-space: nowrap;

    .title {
        color: ${THEME.primary};
        //padding-bottom: 4px;
    }

    .subtitle {
        color: ${THEME.accent};
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
