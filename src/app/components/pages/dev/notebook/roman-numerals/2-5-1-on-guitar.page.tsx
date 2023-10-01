import React from "react";
import styled from "styled-components";
import Chord from "../../../../../core/models/Chord";
import {
  ChordId,
  IModelConfig,
  IPod,
  NoteId,
  ScaleId,
} from "../../../../../core/models/Model.constants";
import { NOTE_PRESET_MAP } from "../../../../../core/models/Model.constants";
import {
  getNoteFromId,
  getNoteFromPod,
} from "../../../../../core/models/Note.utils";
import Scale from "../../../../../core/models/Scale";
import { DEFAULT_DEGREE_COLOR_SCHEME } from "../../../../../core/theory/Degree.constants";
import { IFretProps } from "../../../../../viewers/fretboard/Fretboard.utils";
import { VOICING_PRESET_MAP } from "../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../layout/PageLayout";
import FretboardCell from "../../../../ui/FretboardCell";
import SmartCard, { ICardConfig } from "../../../../ui/SmartCard";

const StyledCAGEDPage = styled(PageLayout)``;

const ROOT = (NOTE_PRESET_MAP.get(NoteId.C) as IModelConfig).value;

const MAJOR = new Scale(ScaleId.Ionian, { root: ROOT });
const MAJOR_NOTES = MAJOR.notePods as IPod[];

const MINOR = new Scale(ScaleId.Ionian, { root: ROOT });
const MINOR_NOTES = MINOR.notePods as IPod[];

const MAJOR_ITEMS = [
  {
    presetId: ChordId.Min7,
    rootId: getNoteFromPod(MAJOR_NOTES[1]),
    voicingId: null,
  },
  {
    presetId: ChordId.Dom7,
    rootId: getNoteFromPod(MAJOR_NOTES[4]),
    voicingId: null,
  },
  {
    presetId: ChordId.Maj7,
    rootId: getNoteFromPod(MAJOR_NOTES[0]),
    voicingId: null,
  },
];

const MINOR_ITEMS = [
  {
    presetId: ChordId.HalfDim7,
    rootId: getNoteFromPod(MINOR_NOTES[2]),
    voicingId: null,
  },
  {
    presetId: ChordId.Min7,
    rootId: getNoteFromPod(MINOR_NOTES[4]),
    voicingId: null,
  },
  {
    presetId: ChordId.Min7,
    rootId: getNoteFromPod(MINOR_NOTES[0]),
    voicingId: null,
  },
];

const getColor = (fretProps: IFretProps) => {
  const { stringIndex, fretIndex, tuning, model } = fretProps;
  // @ts-ignore
  const noteIndex = tuning[stringIndex] + fretIndex;
  // @ts-ignore
  const [interval, note] = model.tryGetPodPairAtPitch(noteIndex);

  if (!note) return;

  if (interval[1] === 0) return DEFAULT_DEGREE_COLOR_SCHEME[0];
  if (interval[1] === 2) return DEFAULT_DEGREE_COLOR_SCHEME[4];
  if (interval[1] === 4) return "black";
  if (interval[1] === 6) return "black";
  return "black";
};

const getRows = (items: any[]) => {
  return [
    {
      cols: items.map((item) => {
        const { presetId, rootId, voicingId } = item as any;
        const instance = new Chord(presetId, {
          root: (getNoteFromId(rootId) as IModelConfig).value,
        });
        const voicing = voicingId
          ? VOICING_PRESET_MAP.get(voicingId)
          : undefined;
        const fretRange = [1, 14] as [number, number];
        return {
          content: (
            <FretboardCell
              caption={instance.getName()}
              fretboardConfig={{
                model: instance,
                voicing,
                fretRange,
                showFretNumbers: false,
                showFretDots: false,
                colorMapFn: getColor,
              }}
            />
          ),
        };
      }),
    },
  ];
};

const getCardConfigs = (): ICardConfig[] => {
  return [
    {
      title: "Major II-V-I",
      table: {
        thead: [{ cols: ["II", "V", "I"] }],
        tbody: getRows(MAJOR_ITEMS),
      },
    },
    {
      title: "Minor ii-v-i",
      table: {
        thead: [{ cols: ["ii", "v", "i"] }],
        tbody: getRows(MINOR_ITEMS),
      },
    },
  ];
};

const Page: React.FC<any> = () => {
  return (
    <StyledCAGEDPage title="Chord Progressions">
      <SmartCard cards={getCardConfigs()} />
    </StyledCAGEDPage>
  );
};

export default Page;
