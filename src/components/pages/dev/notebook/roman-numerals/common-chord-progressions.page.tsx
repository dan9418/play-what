import React from "react";
import styled from "styled-components";
import {
    NoteId,
    ScaleId
} from "../../../../../core/models/Model.constants";
import Note from "../../../../../core/models/Note";
import Scale from "../../../../../core/models/Scale";
import PageLayout from "../../../../layout/PageLayout";

const StyledPage = styled(PageLayout)``;

const ROOT = Note.fromId(NoteId.C);

const MAJOR = new Scale(ScaleId.Ionian, { root: ROOT });

const Page: React.FC<any> = () => {
    return (
        <StyledPage title="Chord Progressions">
        </StyledPage>
    );
};

export default Page;
