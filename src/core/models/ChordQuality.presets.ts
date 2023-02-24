export interface IChordQuality {
  id: string;
  name: {
    long: string;
    medium: string;
    short: string;
    minimal: string;
    jazz: string;
  };
}

export const CHORD_QUALITY: { [x: string]: IChordQuality } = {
  major: {
    id: "major",
    name: {
      long: "Major",
      medium: "Maj",
      short: "M",
      minimal: "",
      jazz: "Δ",
    },
  },
  minor: {
    id: "minor",
    name: {
      long: "Minor",
      medium: "Min",
      short: "m",
      minimal: "m",
      jazz: "-",
    },
  },
  dominant: {
    id: "dominant",
    name: {
      long: "Dominant",
      medium: "Dom",
      short: "7",
      minimal: "7",
      jazz: "⁷",
    },
  },
  halfDiminished: {
    id: "halfDiminished",
    name: {
      long: "Half-Diminished",
      medium: "Half-Dim",
      short: "ø",
      minimal: "ø",
      jazz: "ø",
    },
  },
  diminished: {
    id: "diminished",
    name: {
      long: "Diminished",
      medium: "Dim",
      short: "d",
      minimal: "d",
      jazz: "o",
    },
  },
  augmented: {
    id: "augmented",
    name: {
      long: "Augmented",
      medium: "Aug",
      short: "A",
      minimal: "",
      jazz: "+",
    },
  },
};

export const CHORD_QUALITY_VALUES = Object.values(CHORD_QUALITY);
