import { navigate } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../contexts/PagePropsContext";
import { isEditingKeyState, octaveState } from "../../state/state";
import THEME from "../../styles/theme";
import ButtonInput from "../inputs/ButtonInput";
import RootInput from "../inputs/RootInput";
import { StyledCard } from "../ui/Card";

const StyledRoot = styled.div`
    margin-top: 8px;
    .preview {
        label { margin-right: 4px; }
        button { margin-left: 4px; }
        b { font-size: 120%; }
    }
    .edit {
        margin-top: 16px;
        border: 1px solid ${props => props.theme.utils.border};
        background-color: ${({ theme }) => theme.status.highlight};
        border-radius: 8px;
        padding: 16px;
    }
`;

const StyledRootless = styled(StyledCard)`
    margin-top: 16px;
    background-color: ${THEME.status.highlight};
    border: 1px solid ${props => props.theme.utils.border};
    color: ${THEME.text.primary};
    b {
        margin-right: 4px;
    }
    .text {
        margin-bottom: 8px;
        display: inline-block;
    }
`;


const RootCard: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const [octave, setOctave] = useRecoilState(octaveState);
    const [isEditing, setIsEditing] = useRecoilState(isEditingKeyState);

    const modelType = pageProps.path.includes('chord') ? 'chord' : 'scale';

    if (!root) {
        return (
            <StyledRootless>
                <span className="text">
                    <b>This {modelType} does not have a root.</b>
                    Please select a root to see the notes.</span>
                <RootInput />
            </StyledRootless>
        )
    }


    const onClear = () => {
        const rootIndex = pageProps.path.lastIndexOf('root');
        const sanitized = rootIndex === -1 ?
            pageProps.path :
            pageProps.path.slice(0, rootIndex);
        navigate(sanitized);
    }

    const toggle = (
        <ButtonInput isLink onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit'}
        </ButtonInput>
    );

    const remove = root ? (
        <ButtonInput isLink onClick={onClear}>
            Remove
        </ButtonInput>
    ) : null;

    return (
        <StyledRoot>

            <div className="preview">
                <label>Root:</label>
                <b>{root.name}</b>
                <sub>{octave}</sub>
                {toggle}
                {remove}
            </div>
            {isEditing && (
                <div className="edit">
                    <RootInput />
                </div>
            )}
        </StyledRoot>
    );
};

export default RootCard;
