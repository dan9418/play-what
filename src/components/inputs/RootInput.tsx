import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { usePageProps, useRoot } from "../../contexts/PagePropsContext";
import { NoteId } from "../../core/models/Model.constants";
import { NOTE_PRESET_MAP } from "../../core/models/Model.presets";

const StyledRootInput = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;

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

        &:hover, &.active {
            background-color: ${props => props.theme.action.active};
            color: white;
        }
    }
`;

const RootInput: React.FC<any> = () => {
    const root = useRoot();
    const pageProps = usePageProps();
    const { path } = pageProps;

    const rootIndex = pageProps.path.lastIndexOf('root');
    const basePath = root ?
        path.slice(0, rootIndex) :
        path;

    return (
        <StyledRootInput>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Cs}`}>{NOTE_PRESET_MAP.get(NoteId.Cs).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Ds}`}>{NOTE_PRESET_MAP.get(NoteId.Ds).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Es}`}>{NOTE_PRESET_MAP.get(NoteId.Es).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Fs}`}>{NOTE_PRESET_MAP.get(NoteId.Fs).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Gs}`}>{NOTE_PRESET_MAP.get(NoteId.Gs).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.As}`}>{NOTE_PRESET_MAP.get(NoteId.As).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Bs}`}>{NOTE_PRESET_MAP.get(NoteId.Bs).name}</Link>

            <Link activeClassName="active" to={`${basePath}root/${NoteId.C}`} className="main">{NOTE_PRESET_MAP.get(NoteId.C).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.D}`} className="main">{NOTE_PRESET_MAP.get(NoteId.D).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.E}`} className="main">{NOTE_PRESET_MAP.get(NoteId.E).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.F}`} className="main">{NOTE_PRESET_MAP.get(NoteId.F).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.G}`} className="main">{NOTE_PRESET_MAP.get(NoteId.G).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.A}`} className="main">{NOTE_PRESET_MAP.get(NoteId.A).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.B}`} className="main">{NOTE_PRESET_MAP.get(NoteId.B).name}</Link>

            <Link activeClassName="active" to={`${basePath}root/${NoteId.Cb}`}>{NOTE_PRESET_MAP.get(NoteId.Cb).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Db}`}>{NOTE_PRESET_MAP.get(NoteId.Db).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Eb}`}>{NOTE_PRESET_MAP.get(NoteId.Eb).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Fb}`}>{NOTE_PRESET_MAP.get(NoteId.Fb).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Gb}`}>{NOTE_PRESET_MAP.get(NoteId.Gb).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Ab}`}>{NOTE_PRESET_MAP.get(NoteId.Ab).name}</Link>
            <Link activeClassName="active" to={`${basePath}root/${NoteId.Bb}`}>{NOTE_PRESET_MAP.get(NoteId.Bb).name}</Link>
        </StyledRootInput>
    );
};

export default RootInput;
