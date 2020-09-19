import PW_Core from '@pw/core';

export default {
    fretRange: [0, 12],
    tuning: [16, 11, 7, 2, -3, -8],
    colorFn: PW_Core.models.pod.colorBy({ type: 'degree' }),
    textFn: PW_Core.models.pod.textBy({ type: 'degree' }),
    reduced: true,
    intervals: [],
    keyCenter: null
};
