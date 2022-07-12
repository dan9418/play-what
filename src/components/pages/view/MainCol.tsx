import React, { useState } from "react";
import styled from 'styled-components';
import ButtonInput from "../../inputs/ButtonInput";
import Modal from "../../layout/Modal";
import Card from "../../ui/Card";
import Icon from "../../ui/Icon";

const StyledMainCol = styled.div`
    .maximize {
        background-color: transparent !important;
    }
`;

interface IMainColProps {
    title: string;
    viewer: any;
}

const MainCol: React.FC<IMainColProps> = (props) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const { title, viewer } = props;

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
                <Card title={title} className="view"
                    action={<ButtonInput className="maximize" onClick={() => setIsFullScreen(true)}>
                        <Icon iconId="maximize" />
                    </ButtonInput>}
                >
                    {viewer}
                </Card>
            </StyledMainCol>
        </>
    );
};

export default MainCol;
