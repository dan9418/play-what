import PW from '@play-what/core';

export default {
    fretRange: [0, 12],
    tuning: [16, 11, 7, 2, -3, -8],
    colorFn: PW.api.Vector.colorBy({ type: 'degree' }),
    textFn: PW.api.Vector.textBy({ type: 'degree' }),
    reduced: true,
    intervals: [],
    keyCenter: null
};
