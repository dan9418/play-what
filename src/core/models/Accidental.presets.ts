interface IAccidental {
  id: string;
  name: string;
  symbol: string;
  value: number;
}

export const ACCIDENTAL: { [x: string]: IAccidental } = {
  doubleFlat: {
    id: "doubleFlat",
    name: "Double Flat",
    symbol: "bb",
    value: -2,
  },
  flat: {
    id: "flat",
    name: "Flat",
    symbol: "b",
    value: -1,
  },
  natural: {
    id: "natural",
    name: "Natural",
    symbol: "♮",
    value: 0,
  },
  sharp: {
    id: "sharp",
    name: "Sharp",
    symbol: "#",
    value: 1,
  },
  doubleSharp: {
    id: "doubleSharp",
    name: "Double Sharp",
    symbol: "##",
    value: 2,
  },
};

export const ACCIDENTAL_VALUES = Object.values(ACCIDENTAL);
