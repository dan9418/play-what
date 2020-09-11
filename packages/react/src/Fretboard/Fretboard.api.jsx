export const DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];

export const STANDARD_TUNING = [16, 11, 7, 2, -3, 8]; // e B G D A E

export const getDotsForFret = (fretNumber) => {
    let mod = fretNumber % 12;
    if (mod === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES[mod])
        return '•';
    return '';
}