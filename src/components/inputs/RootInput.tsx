import { Link } from "gatsby";
import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../contexts/PagePropsContext";
import { NoteId } from "../../core/models/Model.constants";
import { NOTE_PRESET_MAP } from "../../core/models/Model.presets";
import { octaveState } from "../../state/state";
import InputRow from "../ui/InputRow";
import DropdownInput from "./DropdownInput";

const StyledRootInput = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    width: 100%;

    @media(min-width: 512px) {

    }

    .spelling, .accidental {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 32px;
        width: 32px;
        border-radius: 4px;

        &:hover, &.active {
            background-color: ${props => props.theme.action.active};
            color: white;
        }
    }
`;

const OCTAVE_OPTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((x, i) => ({ id: i + 1, name: i + 1 }))

const RootInput: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const { path } = pageProps;

    const rootIndex = pageProps.path.lastIndexOf('root');
    const basePath = root ?
        path.slice(0, rootIndex) :
        path;
    const rootKey = root ?
        path.slice(rootIndex + 5, rootIndex + 6) :
        path;

    const [octave, setOctave] = useRecoilState(octaveState);

    return (
        <StyledRootInput>
            <InputRow label="Spelling">
                <div className="spelling">
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.C}`} >{NOTE_PRESET_MAP.get(NoteId.C).name}</Link>
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.D}`} >{NOTE_PRESET_MAP.get(NoteId.D).name}</Link>
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.E}`} >{NOTE_PRESET_MAP.get(NoteId.E).name}</Link>
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.F}`} >{NOTE_PRESET_MAP.get(NoteId.F).name}</Link>
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.G}`} >{NOTE_PRESET_MAP.get(NoteId.G).name}</Link>
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.A}`} >{NOTE_PRESET_MAP.get(NoteId.A).name}</Link>
                    <Link activeClassName="active" to={`${basePath}root/${NoteId.B}`} >{NOTE_PRESET_MAP.get(NoteId.B).name}</Link>
                </div>
            </InputRow>
            {root && (
                <InputRow label="Accidental">
                    <div className="accidental">
                        <Link activeClassName="active" to={`${basePath}${rootKey}-flat`} >b</Link>
                        <Link activeClassName="active" to={`${basePath}${rootKey}`} >none</Link>
                        <Link activeClassName="active" to={`${basePath}${rootKey}-sharp`} >#</Link>
                    </div>
                </InputRow>
            )}
            <InputRow label="Octave">
                <DropdownInput options={OCTAVE_OPTIONS} value={{ id: octave }} setValue={o => setOctave(o.id)} />
            </InputRow>
        </StyledRootInput>
    );
};

export default RootInput;
