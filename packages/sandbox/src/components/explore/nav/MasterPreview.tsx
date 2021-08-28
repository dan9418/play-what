import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { detailsState } from '../../../state/state';
import THEME from '../../../styles/theme';

export const StyledMasterPreview = styled.h1`
    
    margin-bottom: 32px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${THEME.border};
    text-align: left;
    width: 100%;
    max-width: 1024px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

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
