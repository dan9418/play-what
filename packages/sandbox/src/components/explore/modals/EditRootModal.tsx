import React from 'react';
import RootInput from '../../shared/inputs/RootInput';
import EditModal from './EditModal';

const RootInputAdapter = ({ afterRoot, setAfterRoot }) => <RootInput root={afterRoot} setRoot={setAfterRoot} />

const EditRootModal: React.FC = () => {

    return (
        <EditModal modalTitle="Edit Notes" InputComponent={RootInputAdapter} >

        </EditModal>
    )
}

export default EditRootModal;
