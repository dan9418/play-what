import Chord from "../../../core/models/Chord";
import { ChordId, NoteId } from "../../../core/models/Model.constants";
import { getNoteFromId } from "../../../core/models/Note.utils";

export const DEFAULT_MODEL = new Chord(ChordId.Maj7, {
  root: getNoteFromId(NoteId.C),
});
