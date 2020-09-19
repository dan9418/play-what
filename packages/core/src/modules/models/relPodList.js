const DEFAULT = {
	root: [0, 0],
	list: []
};

/*
export const chordalInversion = (conceptConfig, inversion) => {
    const relPodList = { ...conceptConfig };
    relPodList.B = [...conceptConfig.B];
    relPodList.B[0] = addPods(relPodList.B[0], Presets.INTERVALS.P8.a);
    relPodList.B = rotate(relPodList.B, inversion);
    return relPodList;
} */

export default {
	defaultValue: DEFAULT
};
