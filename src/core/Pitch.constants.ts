import { IPreset, PresetMap } from "../models/Model.constants";

export const MAX_PITCH = 12;

export enum PitchId {
  MiddleC = "middle-c",
  Midi = "midi",
}

interface IPitchPreset extends IPreset<PitchId> {
  noteIndex: number;
}

export const PITCH_PRESET_MAP: PresetMap<PitchId, IPitchPreset> = new Map([
  [
    PitchId.MiddleC,
    {
      presetId: PitchId.MiddleC,
      name: "Middle C",
      noteIndex: 0,
    },
  ],
  [
    PitchId.Midi,
    {
      presetId: PitchId.Midi,
      name: "MIDI",
      noteIndex: 60,
    },
  ],
]);

export const ROOT_PITCH = (
  PITCH_PRESET_MAP.get(PitchId.MiddleC) as IPitchPreset
).noteIndex;
