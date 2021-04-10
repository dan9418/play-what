import { modalState } from "@pw/sandbox/src/state/dataState";
import React from "react";
import { useRecoilState } from 'recoil';
import Modal from "../ui/layout/Modal";

const ModalManager = () => {
    const [modal, setModal] = useRecoilState(modalState);

    if (!modal) return null;

    const { props, name, description } = modal;

    return (
        <Modal onClose={() => setModal(null)} name={name} description={description}>
            <modal.component {...props} />
        </Modal>
    );
};

export default ModalManager;
