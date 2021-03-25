import React from "react";
import styled from 'styled-components';
import SubpanelFooter from '../ui/layout/SubpanelFooter';

const StyledActionForm = styled.form`
    > :first-child {
        padding: 16px;
    }

    select {
        width: 100%;
    }
`;

const ActionForm = ({ children, onSubmit }) => {
    return (
        <StyledActionForm>
            <div>{children}</div>
            <SubpanelFooter onSubmit={onSubmit} />
        </StyledActionForm>
    );
};

export default ActionForm;
