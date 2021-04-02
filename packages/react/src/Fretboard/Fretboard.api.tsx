export const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

export const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

export const getFretRatios = (numFrets: number): number[] => {
	const ratios = [];
	for (let i = 1; i <= numFrets; i++) {
		ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
	}
	return ratios;
};

export const getDotsForFret = (fretNumber: number): string => {
	const mod = fretNumber % 12;
	if (mod === 0)
		return '• •';
	else if (DOTTED_FRET_INDICES[mod])
		return '•';
	return '';
};

export const FRETBOARD_TUNING = {
	standard: {
		id: 'standard',
		name: 'Standard',
		value: [16, 11, 7, 2, -3, -8] // e B G D A E
	},
	dropD: {
		id: 'dropD',
		name: 'Drop D',
		value: [16, 11, 7, 2, -3, -10] // e B G D A D
	}
};

export const FRETBOARD_TUNING_VALUES = Object.values(FRETBOARD_TUNING);
