import { fullScreenState, modalState } from "@pw/sandbox/src/state/dataState";
import React from "react";
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import IconButton from "../ui/inputs/buttons/IconButton";

const StyledOverlay = styled.div`
	background-color: #ecefef;
	color: white;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
    z-index: 10000;
    padding: 32px 16px;

    > button {
        position: absolute;
        top: 8px;
        right: 8px;
    }
`;

const FullScreenManager: React.FC = () => {
    const [fullScreenData, setFullScreenData] = useRecoilState(fullScreenState);
    const [modalData, setModalData] = useRecoilState(modalState);

    const onClose = () => {
        setFullScreenData(null);
        setModalData(null);
    }

    if (!fullScreenData) return null;

    return (
        <StyledOverlay >
            <IconButton iconId="close" onClick={onClose} />
            {fullScreenData}
        </StyledOverlay>
    );
};

export default FullScreenManager;
