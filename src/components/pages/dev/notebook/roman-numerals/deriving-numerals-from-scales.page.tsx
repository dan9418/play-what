import React from "react";
import styled from "styled-components";
import {
    NoteId,
    ScaleId,
    Tag
} from "../../../../../core/models/Model.constants";
import { SCALE_PRESETS } from "../../../../../core/models/Model.presets";
import Note from "../../../../../core/models/Note";
import Scale from "../../../../../core/models/Scale";
import RomanNumeralsCard from "../../../../cards/RomanNumeralsCard";
import PageLayout from "../../../../layout/PageLayout";
import { StyledCard } from "../../../../ui/Card";

const StyledPage = styled(PageLayout)`
    ${StyledCard} {
        margin-top: 16px;
    }
`;

const ROOT = Note.fromId(NoteId.C);

const DIATONIC_SCALES = SCALE_PRESETS.filter(scale => scale.tags.includes(Tag.Diatonic));


const Page: React.FC<any> = () => {
    return (
        <StyledPage title="Deriving Numerals From Scales">

            {DIATONIC_SCALES.map(scale => {
                const model = new Scale(scale.modelId, { root: ROOT });
                return (
                    <RomanNumeralsCard model={model} title={model.getName()} />
                );
            })}
        </StyledPage>
    );
};

export default Page;
