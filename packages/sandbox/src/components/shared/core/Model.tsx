import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Meter from '../../../../../viewers/src/Meter/Meter';
import { intervalsDetailsState, notesDetailsState, rootDetailsState } from '../../../state/state';
import IntervalsQuickLink from '../../explore/IntervalsQuickLink';
import QuickLink from '../../explore/panels/QuickLink';
import RootQuickLink from '../../explore/RootQuickLink';
import Icon from '../ui/Icon';
import SwitchInput from '../ui/inputs/SwitchInput';

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
    .meter-container {
        .meter {
            width: 128px;
        }
       
        .row {
            display: flex;
            align-items: center;
            &:first-child {
                margin-bottom: 4px;
            }
        }

        .pd {
            margin-left: 4px;
            border: none;
            padding: 2px 4px;
            cursor: pointer;
            border-radius: 4px;
            background-color: transparent;
            text-align: left;
            color: #333;
            font-style: italic;
            &:hover {
                background-color: rgba(0,0,0,0.1);
            }
            &.selected {
                background-color: rgba(0,0,0,0.1);
                cursor: unset;
            }
        }
    }
    .sound {
        border: none;
        padding: 8px;
        cursor: pointer;
        border-radius: 4px;
        background-color: transparent;
        &:hover {
            background-color: rgba(0,0,0,0.1);
        }
    }

    .match-octave {
        display: flex;
        align-items: center;
        flex-direction: column;

        label {
            color: #333;
            font-weight: bold;
            font-size: 80%;
            margin-bottom: 4px;
        }
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
            <StyledSeparator />
            <div className="quick-links">
                <RootQuickLink />
                <IntervalsQuickLink />
                <QuickLink name="Viewer" preview={"Fretboard"} modal={null} />
            </div>

            <StyledSeparator />
            <div className="meter-container">
                <div className="row">
                    <Meter notes={notesDetails.value} range={[0, 12]} />
                    <button type="button" className={`pd`} onClick={() => null}>pitch</button>
                </div>
                <div className="row">
                    <Meter notes={notesDetails.value} range={[0, 7]} />
                    <button type="button" className={`pd selected`} onClick={() => null}>degree</button>
                </div>
            </div>
            <StyledSeparator />
            <button type="button" className={`sound`} onClick={() => null}>
                <Icon iconId="speaker" size={32} />
            </button>
            <StyledSeparator />
            <div className="match-octave">
                <label>Match Octave?</label>
                <SwitchInput value={false} setValue={null} />
            </div>

        </StyledModel>
    );
};

export default Model;
