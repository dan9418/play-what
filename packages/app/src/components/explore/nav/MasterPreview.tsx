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
    flex-direction: row;
    
    align-items: center;

    @media(min-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .title {
        color: ${THEME.text.dark};
        padding-right: 16px;

        @media(min-width: 1024px) {
            font-size: 120%;
        }
    }

    .subtitle {
        color: ${THEME.text.medium};
        font-size: 80%;
        font-weight: normal;

        display: grid;
        grid-template-columns: repeat(${props => props.$n}, 1fr);

        div {
            margin-right: 8px;
        }
    }
`;

const MasterPreview: React.FC = () => {

    // @ts-ignore
    const [details, setDetails] = useRecoilState(detailsState);

    const noteNames = details.notes.preview.split(',');
    const intervalNames = details.intervals.preview.split(',');

    return (
        <StyledMasterPreview $n={noteNames.length}>
            <div className="title">{details.notes.formattedName}</div>
            <div className="subtitle">
                {noteNames.map(n => <div key={n}>{n}</div>)}
                {intervalNames.map(n => <div key={n}>{n}</div>)}
            </div>
        </StyledMasterPreview>
    )
}

export default MasterPreview;
