import Chord from "../../../core/models/Chord";
import { ChordId, NoteId } from "../../../core/models/Model.constants";
import Note from "../../../core/models/Note";

export const DEFAULT_MODEL = new Chord(ChordId.Maj7, { root: Note.fromId(NoteId.C) })
