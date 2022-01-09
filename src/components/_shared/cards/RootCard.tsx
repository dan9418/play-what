import Note from "@pw-core/models/Note";
import { navigate } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../../contexts/PagePropsContext";
import NumberUtils from "../../../core/general/Number.utils";
import { NOTE_PRESETS } from "../../../core/models/Model.presets";
import InputRow from "../../_shared/ui/InputRow";
import DropdownInput from "../inputs/DropdownInput";

const StyledRoot = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    @media(min-width: 512px) {
        grid-template-columns: 1fr 1fr;
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

    const octave = root && root.getOctave() || 4;
    const setOctave = v => {
        const note = new Note([(v - 4) * 12 + NumberUtils.modulo(root.pod[0], 12), root.pod[1]]);
    };

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

    console.log('dpb', selectedRoot);

    return (

        <StyledRoot>
            <InputRow label="Root">
                <DropdownInput options={NOTE_OPTIONS} value={selectedRoot} setValue={onChangeRoot} />
            </InputRow>
            <InputRow label="Octave">
                <DropdownInput options={OCTAVE_OPTIONS} value={{ id: octave }} setValue={note => setOctave(note.id)} />
            </InputRow>
        </StyledRoot>

    );
};

export default RootCard;
