import _Preset, { INTERVAL } from './Vector.Interval.presets';
import * as Theory from './Theory';
import * as Vector from './Vector';

export const Preset = _Preset;

export const getName = ({ pod }) => {
  if (pod.d < 0 || pod.d > Vector.max.d) {
    console.error('degree out of bounds', pod);
    return '';
  }
  const reduced = Vector.reduce(pod);
  const ivl = Object.values(INTERVAL).find(({ value }) => value.p === reduced.p && value.d === reduced.d);
  return ivl ? ivl.id : '';
};
