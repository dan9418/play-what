import NumberUtils from "../general/Number.utils";
import Chord from "./Chord";
import { IPod, Tag } from "./Model.constants";
import { getChordfromValue } from "./Model.generation";
import { subtractPods } from "./Pod.static";

export const getNumeral = (podList, intervals, root, notes, d): Chord => {
  // Get every other interval
  const curIntervals: IPod[] = [];
  for (let i = 0; i < podList.length; i = i + 2) {
    const curD = NumberUtils.moduloSum(d, i, podList.length);
    const curIvl = intervals[curD];
    curIntervals.push(curIvl);
  }
  // Get difference between each interval
  const newPods: IPod[] = [[0, 0]];
  for (let i = 0; i < curIntervals.length - 1; i++) {
    const newPod = subtractPods(curIntervals[i + 1], curIntervals[0]);
    newPods.push(newPod);
  }
  const numeral = getChordfromValue(newPods);
  if (root && notes) {
    numeral.applyRoot(notes[d]);
  }
  return numeral;
};

export const getAllNumerals = (
  podList,
  intervas,
  root,
  notes,
  tags
): Chord[] => {
  const numerals: Chord[] = [];
  if (tags.includes(Tag.Diatonic)) {
    for (let i = 0; i < podList.length; i++) {
      numerals.push(getNumeral(podList, intervas, root, notes, i));
    }
  }
  return numerals;
};
