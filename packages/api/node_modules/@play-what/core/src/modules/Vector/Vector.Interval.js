import preset from './Vector.Interval.presets';
import Vector from './Vector';

const getName = ({ pod }) => {
  if (pod.d < 0 || pod.d > Vector.max.d) {
    console.error('degree out of bounds', pod);
    return '';
  }
  const reduced = Vector.reduce(pod);
  const ivl = Object.values(preset).find(({ value }) => value.p === reduced.p && value.d === reduced.d);
  return ivl ? ivl.id : '';
};

export default {
  preset,
  getName
};
