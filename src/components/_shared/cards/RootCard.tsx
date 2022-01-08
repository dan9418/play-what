import Note from "@pw-core/models/Note";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps } from "../../../contexts/PagePropsContext";
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
    const { pageContext } = usePageProps() as any;
    const root = pageContext.rootId ? Note.fromId(pageContext.rootId) : undefined;

    const octave = root && root.getOctave() || 4;
    const setOctave = v => {
        const note = new Note([(v - 4) * 12 + NumberUtils.modulo(root.pod[0], 12), root.pod[1]]);
    };

    const selectedRoot = root ? root : { id: 'unselected' };

    return (

        <StyledRoot>
            <InputRow label="Root">
                <DropdownInput options={NOTE_OPTIONS} value={selectedRoot.id} setValue={note => setRoot(note.id === 'unselected' ? undefined : new Note(note.value))} />
            </InputRow>
            <InputRow label="Octave">
                <DropdownInput options={OCTAVE_OPTIONS} value={{ id: octave }} setValue={note => setOctave(note.id)} />
            </InputRow>
        </StyledRoot>

    );
};

export default RootCard;
