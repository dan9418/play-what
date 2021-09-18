import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { detailsState } from '../../../state/state';
import THEME from '../../../styles/theme';

export const StyledMasterPreview = styled.div`

    width: 100%;
    height: 100%; 
    white-space: nowrap; 

    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: flex-start;

    @media(min-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title {
        color: ${THEME.text.dark};
        padding-right: 16px;
        font-size: 150%;

        @media(min-width: 1024px) {
            font-size: 150%;
        }
    }

    .subtitle {
        color: ${THEME.text.medium};

        .note {
            font-weight: bold;
            font-size: 120%;
        }

        .interval {
            
        }

        div {
            text-align: center;
        }

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
            <h1 className="title">{details.notes.formattedName}</h1>
            <div className="subtitle">
                {noteNames.map(n => <div className="note" key={n}>{n}</div>)}
                {intervalNames.map(n => <div className="interval" key={n}>{n}</div>)}
            </div>
        </StyledMasterPreview>
    )
}

export default MasterPreview;
