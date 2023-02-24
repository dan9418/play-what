export interface IIntervalQuality {
  id: string;
  name: string;
  symbol: string;
  up?: string;
  down?: string;
}

export const INTERVAL_QUALITY: { [x: string]: IIntervalQuality } = {
  dim: {
    id: "dim",
    name: "Diminished",
    symbol: "d",
    down: undefined,
    up: "min",
  },
  min: {
    id: "min",
    name: "Minor",
    symbol: "m",
    down: "dim",
    up: "maj",
  },
  perfect: {
    id: "perfect",
    name: "Perfect",
    symbol: "P",
    down: "dim",
    up: "aug",
  },
  maj: {
    id: "maj",
    name: "Major",
    symbol: "M",
    down: "min",
    up: "aug",
  },
  aug: {
    id: "aug",
    name: "Augmented",
    symbol: "A",
    down: "maj",
    up: undefined,
  },
};

export const INTERVAL_QUALITY_VALUES = Object.values(INTERVAL_QUALITY);
