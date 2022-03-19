import { navigate } from "gatsby";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../contexts/PagePropsContext";
import { octaveState } from "../../state/state";
import THEME from "../../styles/theme";
import ButtonInput from "../inputs/ButtonInput";
import DropdownInput from "../inputs/DropdownInput";
import RootInput from "../inputs/RootInput";
import { CardHeader, StyledCard } from "../ui/Card";
import InputRow from "../ui/InputRow";

const StyledRoot = styled.div`
    font-size: 120%;
    color: ${({ theme }) => theme.text.secondary};
    padding: 0 8px;
    .root {
        label {
            font-weight: bold;
            margin-right: 8px;
        }
        sub {
            font-size: 80%;
            font-weight: normal;
            margin-right: 8px;
        }
        button {
            padding: 4px;
            background-color: transparent;
            color: ${({ theme }) => theme.action.interactive};
        }
    }

    .edit {
        margin-top: 16px;
        border: 1px solid ${props => props.theme.utils.border};
        //background-color: ${({ theme }) => theme.surface.card};
        background-color: ${THEME.status.highlight};
        border-radius: 8px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: flex-end;

        button {
            margin-left: auto;
        }
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

const OCTAVE_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => ({ id: i + 1, name: i + 1 }))

const RootCard: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const [octave, setOctave] = useRecoilState(octaveState);
    const [isEditing, setIsEditing] = useState(false);

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

    const action = <ButtonInput onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Done' : 'Edit'}</ButtonInput>;

    return (
        <StyledRoot>

            <div className="root">
                <label>Root:</label>
                {root.name}
                <sub>{octave}</sub>
                {action}
            </div>
            {isEditing && (
                <div className="edit">
                    <RootInput />
                    <InputRow label="Octave">
                        <DropdownInput options={OCTAVE_OPTIONS} value={{ id: octave }} setValue={o => setOctave(o.id)} />
                    </InputRow>
                    <ButtonInput onClick={onClear}>Reset</ButtonInput>
                </div>
            )}

        </StyledRoot>
    );
};

export default RootCard;
