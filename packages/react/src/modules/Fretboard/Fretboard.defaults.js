import Core from '@play-what/core';

export default {
    fretRange: [0, 12],
    tuning: [16, 11, 7, 2, -3, -8],
    colorFn: Core.Vector.colorBy({ type: 'degree' }),
    textFn: Core.Vector.textBy({ type: 'degree' }),
    reduced: true,
    intervals: [],
    keyCenter: null
};
