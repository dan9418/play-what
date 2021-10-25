import React from "react";
import styled from 'styled-components';
import { MenuList } from "../menu/MenuList";

const StyledEditPanel = styled.div`
  
    border-bottom: 1px solid #ccc;
    width: 100%;

    & > .content {
        padding: 0 16px;
    }
    .tabs {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 48px;
        padding: 0 16px;
        border-bottom: 1px solid #ccc;

        background: ${({ theme }) => theme.surface.gradient};
        .itm {
            padding: 4px 8px;
            cursor: pointer;
        }
    }
`;


const EditPanel: React.FC<any> = () => {

    return (
        <StyledEditPanel>
            <div className="tabs">
                <div className="itm">
                    <b>Notes</b>
                </div>
                <div className="itm">
                    Viewer
                </div>
                <div className="itm">
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
