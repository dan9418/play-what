import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../../contexts/PagePropsContext";
import { NoteId } from "../../../core/models/Model.constants";
import { NOTE_PRESET_MAP } from "../../../core/models/Model.presets";

const StyledRootInput = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    @media(min-width: 512px) {

    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 4px;

        &.main {
            font-size: 140%;
            padding: 8px 4px;
            font-weight: bold;
        }

        border-radius: 4px;

        &:hover {
            background-color: ${props => props.theme.action.active};
            color: white;
        }
    }
`;

const RootInput: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const { path } = pageProps;


    return (
        <StyledRootInput>
            <Link to={`${path}root/${NoteId.Cs}`}>{NOTE_PRESET_MAP.get(NoteId.Cs).name}</Link>
            <Link to={`${path}root/${NoteId.Ds}`}>{NOTE_PRESET_MAP.get(NoteId.Ds).name}</Link>
            <Link to={`${path}root/${NoteId.Es}`}>{NOTE_PRESET_MAP.get(NoteId.Es).name}</Link>
            <Link to={`${path}root/${NoteId.Fs}`}>{NOTE_PRESET_MAP.get(NoteId.Fs).name}</Link>
            <Link to={`${path}root/${NoteId.Gs}`}>{NOTE_PRESET_MAP.get(NoteId.Gs).name}</Link>
            <Link to={`${path}root/${NoteId.As}`}>{NOTE_PRESET_MAP.get(NoteId.As).name}</Link>
            <Link to={`${path}root/${NoteId.Bs}`}>{NOTE_PRESET_MAP.get(NoteId.Bs).name}</Link>

            <Link to={`${path}root/${NoteId.C}`} className="main">{NOTE_PRESET_MAP.get(NoteId.C).name}</Link>
            <Link to={`${path}root/${NoteId.D}`} className="main">{NOTE_PRESET_MAP.get(NoteId.D).name}</Link>
            <Link to={`${path}root/${NoteId.E}`} className="main">{NOTE_PRESET_MAP.get(NoteId.E).name}</Link>
            <Link to={`${path}root/${NoteId.F}`} className="main">{NOTE_PRESET_MAP.get(NoteId.F).name}</Link>
            <Link to={`${path}root/${NoteId.G}`} className="main">{NOTE_PRESET_MAP.get(NoteId.G).name}</Link>
            <Link to={`${path}root/${NoteId.A}`} className="main">{NOTE_PRESET_MAP.get(NoteId.A).name}</Link>
            <Link to={`${path}root/${NoteId.B}`} className="main">{NOTE_PRESET_MAP.get(NoteId.B).name}</Link>

            <Link to={`${path}root/${NoteId.Cb}`}>{NOTE_PRESET_MAP.get(NoteId.Cb).name}</Link>
            <Link to={`${path}root/${NoteId.Db}`}>{NOTE_PRESET_MAP.get(NoteId.Db).name}</Link>
            <Link to={`${path}root/${NoteId.Eb}`}>{NOTE_PRESET_MAP.get(NoteId.Eb).name}</Link>
            <Link to={`${path}root/${NoteId.Fb}`}>{NOTE_PRESET_MAP.get(NoteId.Fb).name}</Link>
            <Link to={`${path}root/${NoteId.Gb}`}>{NOTE_PRESET_MAP.get(NoteId.Gb).name}</Link>
            <Link to={`${path}root/${NoteId.Ab}`}>{NOTE_PRESET_MAP.get(NoteId.Ab).name}</Link>
            <Link to={`${path}root/${NoteId.Bb}`}>{NOTE_PRESET_MAP.get(NoteId.Bb).name}</Link>
        </StyledRootInput>
    );
};

export default RootInput;
