export const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

export const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

export const getFretRatios = (numFrets) => {
	let ratios = [];
	for (let i = 1; i <= numFrets; i++) {
		ratios.push((i <= 1) ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);
	}
	return ratios;
}

export const getDotsForFret = (fretNumber) => {
	let mod = fretNumber % 12;
	if (mod === 0)
		return '• •';
	else if (DOTTED_FRET_INDICES[mod])
		return '•';
	return '';
}

export const STANDARD_TUNING = [16, 11, 7, 2, -3, 8]; // e B G D A E
