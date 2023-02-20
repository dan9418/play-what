import React from "react";
import styled from "styled-components";
import Chord from "../../../../../../core/models/Chord";
import { ChordId, NoteId } from "../../../../../../core/models/Model.constants";
import Note from "../../../../../../core/models/Note";
import {
  VoicingId,
  VOICING_PRESET_MAP,
} from "../../../../../../viewers/fretboard/Fretboard.voicing";
import PageLayout from "../../../../../layout/PageLayout";
import FretboardCell from "../../../../../ui/FretboardCell";
import SmartCard, { ICardConfig } from "../../../../../ui/SmartCard";

const StyledVoicingsPage = styled(PageLayout)``;

const THEAD = ["Model", "Triad", "Seventh", "Drop 3-7", "Drop 7-3"];

const CHORD_IDS = [ChordId.Maj7, ChordId.Min7, ChordId.Dom7, ChordId.HalfDim7];

const CHORD_ROOT = Note.fromId(NoteId.C);

interface IRootCard {
  stringRoot: string;
  fretRange: [number, number];
  voicingids: VoicingId[];
}

const CARDS: IRootCard[] = [
  {
    stringRoot: "E",
    fretRange: [6, 10],
    voicingids: [
      VoicingId.Chord_Triad_EShape_1,
      VoicingId.Chord_Seventh_EShape_1,
      VoicingId.Chord_Shell_E_37,
      VoicingId.Chord_Shell_E_73,
    ],
  },
  {
    stringRoot: "A",
    fretRange: [2, 6],
    voicingids: [
      VoicingId.Chord_Triad_AShape_1,
      VoicingId.Chord_Seventh_AShape_1,
      VoicingId.Chord_Shell_A_37,
      VoicingId.Chord_Shell_A_73,
    ],
  },
  {
    stringRoot: "D",
    fretRange: [8, 12],
    voicingids: [
      VoicingId.Chord_Triad_DShape_1,
      VoicingId.Chord_Seventh_DShape_1,
      VoicingId.Chord_Shell_D_37,
      VoicingId.Chord_Shell_D_73,
    ],
  },
];

const getVoicingCols = ({ voicingIds, presetId, root, fretRange }) =>
  voicingIds.map((voicingId, i) => {
    const instance = new Chord(presetId, { root });
    const voicing = VOICING_PRESET_MAP.get(voicingId);
    return {
      content: (
        <FretboardCell
          fretboardConfig={{
            model: instance,
            voicing,
            fretRange,
            showFretNumbers: false,
            showFretDots: false,
          }}
        />
      ),
    };
  });

const getChordRows = (
  chordIds: ChordId[],
  voicingIds: VoicingId[],
  root: Note,
  fretRange: [number, number]
) => {
  return chordIds.map((presetId, i) => {
    return {
      cols: [
        new Chord(presetId).getName(),
        ...getVoicingCols({
          voicingIds,
          presetId,
          root,
          fretRange,
        }),
      ],
    };
  });
};

const getRootCard = (
  chordIds: ChordId[],
  root: Note,
  stringRoot: string,
  voicingIds: VoicingId[],
  fretRange: [number, number]
) => {
  return {
    title: `${stringRoot} Root`,
    table: {
      thead: [{ cols: THEAD }],
      tbody: getChordRows(chordIds, voicingIds, root, fretRange),
      headerColIndicies: [0],
    },
  };
};

const getCardConfigs = (
  cards: IRootCard[],
  chordIds: ChordId[],
  root: Note
): ICardConfig[] => {
  return cards.map(({ stringRoot, voicingids, fretRange }) =>
    getRootCard(chordIds, root, stringRoot, voicingids, fretRange)
  );
};

const Page: React.FC = () => {
  return (
    <StyledVoicingsPage title="Chord Voicings">
      <SmartCard cards={getCardConfigs(CARDS, CHORD_IDS, CHORD_ROOT)} />
    </StyledVoicingsPage>
  );
};

export default Page;
