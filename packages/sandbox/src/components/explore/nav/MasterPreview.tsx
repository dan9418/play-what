import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { detailsState } from '../../../state/state';

const StyledMasterPreview = styled.div`
	display: flex;
    align-items: center;
	white-space: nowrap;

    padding: 8px 16px 8px 8px;
    min-width: 128px;

    color: ${({ theme }) => theme.primary};

    .name-preview {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .root {
        font-weight: bold;
        font-size: 40px;
        line-height: 40px;
        margin-right: 8px;
    }
	.name {
		font-weight: bold;
        font-size: 120%;
	}
	.preview {
		color: ${({ theme }) => theme.accent};
        font-size: 80%;
	}
`

const MasterPreview: React.FC<any> = () => {

    // @ts-ignore
    const details = useRecoilValue(detailsState);

    return (
        <StyledMasterPreview>
            <div className="root">{details.root.name}</div>
            <div className="name-preview">
                <div className="name">{details.intervals.formattedName}</div>
                <div className="preview">{details.notes.preview}</div>
            </div>
        </StyledMasterPreview>
    );
};

export default MasterPreview;
