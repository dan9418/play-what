import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { intervalsDetailsState, notesDetailsState, rootDetailsState } from '../../../state/state';

const StyledModel = styled.div`
	margin-left: 16px;
    padding: 4px 16px;
	display: flex;
    background-color: #dcdcdc;//${({ theme }) => theme.card};
    border-radius: 4px;
	
	white-space: nowrap;
    .name-preview {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .root {
        font-weight: bold;
        font-size: 40px;
        line-height: 40px;
        margin-right: 16px;
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

const Model: React.FC<any> = () => {

    // @ts-ignore
    const [rootDetails] = useRecoilState(rootDetailsState);
    // @ts-ignore
	const [intervalsDetails] = useRecoilState(intervalsDetailsState);
    // @ts-ignore
	const [notesDetails] = useRecoilState(notesDetailsState);

    return (
        <StyledModel>
            <div className="root">{rootDetails.name}</div>
            <div className="name-preview">
                <div className="name">{intervalsDetails.name}</div>
                <div className="preview">{notesDetails.preview}</div>
            </div>
        </StyledModel>
    );
};

export default Model;
