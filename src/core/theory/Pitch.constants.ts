export const MAX_PITCH = 12;

export enum PitchId {
  MiddleC = "MiddleC",
  Midi = "Midi",
}

interface IPitchPreset {
  id: PitchId;
  name: string;
  value: number;
}

export const PITCH_PRESET_MAP = new Map<PitchId, IPitchPreset>([
  [
    PitchId.MiddleC,
    {
      id: PitchId.MiddleC,
      name: "Middle C",
      value: 0,
    },
  ],
  [
    PitchId.Midi,
    {
      id: PitchId.Midi,
      name: "MIDI",
      value: 60,
    },
  ],
]);

export const ROOT_PITCH = (
  PITCH_PRESET_MAP.get(PitchId.MiddleC) as IPitchPreset
).value;
