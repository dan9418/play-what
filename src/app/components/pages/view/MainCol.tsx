import React from "react";
import styled from 'styled-components';
import Modal from "../../shared/layout/Modal";

const StyledMainCol = styled.div`
    padding: 16px;
    .maximize {
        background-color: transparent !important;
    }
`;

interface IMainColProps {
    viewer: any;
    isFullScreen: boolean;
    setIsFullScreen: Function;
}

const MainCol: React.FC<IMainColProps> = (props) => {

    const { viewer, isFullScreen, setIsFullScreen } = props;

    return (
        <>
            {isFullScreen && (
                <Modal setIsOpen={setIsFullScreen}>
                    <div className="resize">
                        {viewer}
                    </div>
                </Modal>
            )}
            <StyledMainCol>
                {viewer}
            </StyledMainCol>
        </>
    );
};

export default MainCol;
