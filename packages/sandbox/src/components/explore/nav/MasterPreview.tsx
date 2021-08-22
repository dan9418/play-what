import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { intervalsDetailsState, notesDetailsState, rootDetailsState } from '../../../state/state';

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
    const [rootDetails] = useRecoilState(rootDetailsState);
    // @ts-ignore
    const [intervalsDetails] = useRecoilState(intervalsDetailsState);
    // @ts-ignore
    const [notesDetails] = useRecoilState(notesDetailsState);

    return (
        <StyledMasterPreview>
            <div className="root">{rootDetails.name}</div>
            <div className="name-preview">
                <div className="name">{intervalsDetails.preview}</div>
                <div className="preview">{notesDetails.preview}</div>
            </div>
        </StyledMasterPreview>
    );
};

export default MasterPreview;
