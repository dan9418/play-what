import { navigate } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../../contexts/PagePropsContext";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import { octaveState } from "../../../state/state";
import InputRow from "../../_shared/ui/InputRow";
import DropdownInput from "../inputs/DropdownInput";
import Card, { StyledCard } from "../ui/Card";

const StyledRoot = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    select {
        width: 100%;
    }

    @media(min-width: 512px) {
        grid-template-columns: 1fr 1fr;
        select {
            width: 128px;
        }
    }
`;

const NOTE_OPTIONS = [
    {
        id: 'unselected',
        name: '---'
    },
    ...NOTE_PRESETS
];

const OCTAVE_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => ({ id: i + 1, name: i + 1 }))

const RootCard: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const [octave, setOctave] = useRecoilState(octaveState);

    const selectedRoot = root ? root : { id: 'unselected' };

    const onChangeRoot = note => {
        console.log(pageProps);

        const rootIndex = pageProps.path.lastIndexOf('root');
        const sanitized = rootIndex === -1 ?
            pageProps.path :
            pageProps.path.slice(0, rootIndex);

        if (note.id === 'unselected') {
            navigate(sanitized);
        }
        else {
            navigate(`${sanitized}root/${note.id}`);
        }
    }

    return (
        <Card title="Root">
            <StyledRoot>
                <InputRow label="Spelling">
                    <DropdownInput options={NOTE_OPTIONS} value={selectedRoot} setValue={onChangeRoot} />
                </InputRow>
                <InputRow label="Octave">
                    <DropdownInput options={OCTAVE_OPTIONS} value={{ id: octave }} setValue={o => setOctave(o.id)} />
                </InputRow>
            </StyledRoot>
        </Card>
    );
};

export default RootCard;
