import React, { useState } from "react";
import styled from 'styled-components';
import Fretboard from "../../../viewers/fretboard/Fretboard";
import ButtonInput from "../../inputs/ButtonInput";
import Modal from "../../layout/Modal";
import Card from "../../ui/Card";
import Icon from "../../ui/Icon";

const StyledMainCol = styled.div`
    .maximize {
        background-color: transparent !important;
    }
`;

const MainCol: React.FC<any> = (props) => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    console.log('dpb', props)

    const fretboard = <Fretboard {...props} tuning={props.tuning.value} />;

    return (
        <>
            {isFullScreen && (
                <Modal setIsOpen={setIsFullScreen}>
                    <div className="resize">
                        {fretboard}
                    </div>
                </Modal>
            )}
            <StyledMainCol>
                <Card title="Fretboard" className="view"
                    action={<ButtonInput className="maximize" onClick={() => setIsFullScreen(true)}>
                        <Icon iconId="maximize" />
                    </ButtonInput>}
                >
                    {fretboard}
                </Card>
            </StyledMainCol>
        </>
    );
};

export default MainCol;
