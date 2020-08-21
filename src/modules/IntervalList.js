import { ALL_CONCEPT_PRESETS } from './Concept.presets';
import * as Interval from './Interval';

export const from = ({ preset }) => {
  if (!preset) throw ('only preset supported');
  return ALL_CONCEPT_PRESETS[preset].B;
};

export const areEqual = ({ list1, list2 }) => {
  if (!list1 || !list2) return false;
  if (list1.length !== list2.length) return false;
  for (let i = 0; i < list1.length; i++) {
    if (!Interval.areEqual(list1[i], list2[i])) { return false; }
  }
  return true;
};
