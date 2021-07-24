import React from 'react';
import styled from 'styled-components';

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

const Model: React.FC<any> = ({ navConfig }) => {

    return (
        <StyledModel>
            <div className="root">{navConfig.rootPreview}</div>
            <div className="name-preview">
                <div className="name">{navConfig.intervalsName}</div>
                <div className="preview">{navConfig.notesPreview}</div>
            </div>
        </StyledModel>
    );
};

export default Model;
