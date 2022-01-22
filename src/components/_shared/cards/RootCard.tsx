import { navigate } from "gatsby";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../../contexts/PagePropsContext";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import { octaveState } from "../../../state/state";
import THEME from "../../../styles/theme";
import InputRow from "../../_shared/ui/InputRow";
import ButtonInput from "../inputs/ButtonInput";
import DropdownInput from "../inputs/DropdownInput";
import RootInput from "../inputs/RootInput";
import Card, { CardHeader, StyledCard } from "../ui/Card";

const StyledRoot = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media(min-width: 512px) {

    }

    .root {
        font-size: 200%;
        font-weight: bolder;
        text-align: center;

        sub {
            font-size: 80%;
            font-weight: normal;
        }

        .f {
            color: ${props => props.theme.text.secondary};
            font-size: 60%;
            margin-left: 16px;
            font-weight: normal;
        }
    }

    .edit {
        margin-top: 16px;
        background-color: ${THEME.status.highlight};
        border-radius: 8px;
        padding: 8px;

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
`;

const OCTAVE_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => ({ id: i + 1, name: i + 1 }))

const RootCard: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const [octave, setOctave] = useRecoilState(octaveState);
    const [isEditing, setIsEditing] = useState(false);

    if (!root) {
        return (
            <StyledRootless>
                <CardHeader title="No Root" />
                This chord does not have a root. To see the notes in this chord, select a root below.
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

    const action = <ButtonInput onClick={() => setIsEditing(!isEditing)}>Edit</ButtonInput>;

    return (
        <StyledRoot>
            <Card title="Root" action={action}>
                <div className="root">
                    {root.name}
                    <sub>{octave}</sub>
                    <span className='f'>{root.getFrequency(true)}</span>
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
            </Card>
        </StyledRoot>
    );
};

export default RootCard;
