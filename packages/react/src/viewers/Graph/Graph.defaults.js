import { SCALE } from "@pw/core/src/Pod.presets";

const DEFAULT_GRAPH_PROPS = {
	origin: [0, 0],
	title: 'd vs. p',
	xLabel: 'd',
	yLabel: 'p',
	pods: SCALE.Major.value,
	podType: 'note'
}

export default DEFAULT_GRAPH_PROPS;
