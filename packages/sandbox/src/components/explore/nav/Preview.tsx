import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { intervalsDetailsState, notesDetailsState, rootDetailsState } from '../../../state/state';
import IntervalsQuickLink from '../../explore/IntervalsQuickLink';
import QuickLink from '../../explore/panels/QuickLink';
import RootQuickLink from '../modals/EditRootModal';
import ViewerQuickLink from '../modals/EditViewerModal';
import IconButton from '../../shared/ui/inputs/buttons/IconButton';

const StyledSeparator = styled.div`
    margin: 0 16px;
	height: 48px;
	width: 1px;
	background-color: ${({ theme }) => theme.border};
`

const StyledModel = styled.div`
    padding: 0 16px;
	display: flex;
    align-items: center;
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

    .sound {
        margin-left: 16px;
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
            <IconButton iconId="speaker" className="sound" onClick={() => null} />
            <StyledSeparator />
            <div className="quick-links">
                <RootQuickLink />
                <IntervalsQuickLink />
                <ViewerQuickLink />
            </div>
            <StyledSeparator />
        </StyledModel>
    );
};

export default Model;
