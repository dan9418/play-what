import { navigate } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../contexts/PagePropsContext";
import { isEditingKeyState, octaveState } from "../../state/state";
import THEME from "../../styles/theme";
import ButtonInput from "../inputs/ButtonInput";
import RootInput from "../inputs/RootInput";
import Card from "../ui/Card";

const StyledRoot = styled.div`
    margin-top: 8px;
    .preview {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 300%;
    }
    .rootless {
        margin: 8px 0 16px;
    }
    .remove {
        margin-top: 24px;
        margin-left: auto;
        display: block;
        font-size: 80%;
        color: red; //${THEME.status.negative};
    }
`;

const RootCard: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const [octave, setOctave] = useRecoilState(octaveState);
    const [isEditing, setIsEditing] = useRecoilState(isEditingKeyState);

    const modelType = pageProps.path.includes('chord') ? 'chord' : 'scale';

    const onClear = () => {
        const rootIndex = pageProps.path.lastIndexOf('root');
        const sanitized = rootIndex === -1 ?
            pageProps.path :
            pageProps.path.slice(0, rootIndex);
        navigate(sanitized);
    }

    const toggle = (
        <ButtonInput isLink onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Done' : 'Edit'}
        </ButtonInput>
    );

    const remove = root ? (
        <ButtonInput isLink onClick={onClear} className="remove">
            Remove Root
        </ButtonInput>
    ) : null;

    return (
        <Card title="Root" action={root && toggle} css={root ? `color: ${THEME.text.primary};` : `background-color: ${THEME.status.highlight}; border: 1px solid ${THEME.status.warning}; color: ${THEME.text.primary};`}>
            <StyledRoot $isRootless={!root}>
                {!root && (
                    <div className="rootless">
                        <b>This {modelType} does not have a root.</b>
                        <br />
                        Please select a root to see the notes.
                    </div>
                )}
                {(isEditing || !root) && (
                    <RootInput />
                )}

                {isEditing && remove}

                {(!isEditing && root) && (
                    <div className="preview">
                        <b>{root.name}</b>
                        <sub>{octave}</sub>
                    </div>
                )}
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
