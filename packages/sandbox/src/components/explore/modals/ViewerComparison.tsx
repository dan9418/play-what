import React, { useState } from 'react';
import styled from 'styled-components';
import THEME from '../../../styles/theme';
import ButtonInput from '../../shared/inputs/ButtonInput';
import Viewer from '../Viewer';
import { StyledPodTable } from './PodTable';

const StyledViewerComparison = styled.div`
    display: grid;

    overflow: hidden;

    padding: 16px 0;

    //position: sticky;
    //top: 0;

    //border-bottom: 1px solid ${({ theme }) => theme.border};

    background-color: ${({ theme }) => theme.surface.bg};

    @media(min-width: 512px) {
        grid-template-columns: ${({ $isEditing }) => $isEditing ? '1fr 1fr' : '1fr'};
        gap: 16px;
    }

    .fretboard, .keyboard {
        max-width: 512px;
        max-height: 256px;
        margin: 32px auto;
    }

    ${StyledPodTable} {
        width: 100%;
        max-width: 512px;
        //padding: 64px;
    }

    .selector {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 8px;

        button {
            width: 100%;
        }

        @media(min-width: 512px) {
            display: none;
        }
    }

    @media(max-width: 511px) {
        &.before {
            >:nth-child(3) {
                display: none;
            }
            .selector {
                button {
                    &:first-child {
                        background-color: ${THEME.active};
                        color: white;
                    }
                    &:last-child {
                        background-color: transparent;
                        color: ${THEME.primary};
                        &:hover {
                            background-color: rgba(0,0,0,0.05);
                        }
                    }
                }
            }
        }
        &.after {
            >:nth-child(2) {
                display: none;
            }
            .selector {
                button {
                    &:first-child {
                        background-color: transparent;
                        color: ${THEME.primary};
                        &:hover {
                            background-color: rgba(0,0,0,0.05);
                        }
                    }
                    &:last-child {
                        background-color: ${THEME.active};
                        color: white;
                    }
                }
            }
        }
    }
`;

const ViewerComparison: React.FC<any> = ({ hideModels, always, ...editProps }) => {

    const isEditing = editProps.beforeModelDetails.notes.preview !== editProps.afterModelDetails.notes.preview;
    const [state, setState] = useState('after');

    return (
        <StyledViewerComparison $isEditing={(isEditing || always)} className={state}>
            {isEditing && (
                <div className='selector'>
                    <ButtonInput className={state === 'before' ? 'active' : ''} onClick={() => setState('before')} >Before</ButtonInput>
                    <ButtonInput className={state === 'after' ? 'active' : ''} onClick={() => setState('after')} >After</ButtonInput>
                </div>
            )}
            <Viewer details={editProps.beforeModelDetails} viewerDetails={editProps.beforeViewerDetails} />
            {(isEditing || always) && <Viewer details={editProps.afterModelDetails} viewerDetails={editProps.afterViewerDetails} />}
        </StyledViewerComparison>
    )
}

export default ViewerComparison;
