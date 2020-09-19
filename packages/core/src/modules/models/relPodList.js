const defaults = {
	a: [0, 0],
	B: []
};

/*
export const chordalInversion = (conceptConfig, inversion) => {
    const relPodList = { ...conceptConfig };
    relPodList.B = [...conceptConfig.B];
    relPodList.B[0] = addVectors(relPodList.B[0], Presets.INTERVALS.P8.a);
    relPodList.B = rotate(relPodList.B, inversion);
    return relPodList;
} */

export default {
	defaults
};
