import React from "react";
import styled from 'styled-components';
import { MenuList } from "../menu/MenuList";

const StyledEditPanel = styled.div`
    margin: 16px 0;

    background: ${({ theme }) => theme.surface.highlight};
    border-radius: 8px;
    border: 1px solid #ccc;

    width: 100%;

    .header {
        padding: 16px;
        background: ${({ theme }) => theme.surface.gradient};
        border-bottom: 1px solid #ccc;
        border-radius: 8px 8px 0 0;
    }
    & > .content {
        padding: 0 16px;
        background: ${({ theme }) => theme.surface.gradient};
    }
    .tabs {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 48px;
        padding: 0 16px;
        border-bottom: 1px solid #ccc;

        background: ${({ theme }) => theme.surface.highlight};
        .item {
            padding: 4px 8px;
            cursor: pointer;
        }
    }
`;


const EditPanel: React.FC<any> = () => {

    return (
        <StyledEditPanel>

            <div className="header">
                <h2>Edit</h2>
            </div>
            <div className="tabs">
                <div className="item">
                    <b>Notes</b>
                </div>
                <div className="item">
                    Viewer
                </div>
                <div className="item">
                    Sound
                </div>
            </div>
            <div className="content">
                <MenuList isVertical />
            </div>
        </StyledEditPanel>
    );
};

export default EditPanel;
