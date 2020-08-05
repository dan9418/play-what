export const MAX_VECTOR = { p: 12, d: 7 };

export const moduloInterval = (a, b) => ({
    p: Utils.modulo(a.p, b.p),
    d: Utils.modulo(a.d, b.d)
});

export const getIntervalName = (interval) => {
    const reduced = moduloVectors(interval);
    const preset = Presets.INTERVALS_VALUES.find(i => i.p === reduced.p && i.d === reduced.d);
    return preset ? preset.id : '?';
}

export const areIntervalEqual = (a, b) => {
    if (!a || !b) return false;
    return a.p === b.p && a.d === b.d;
}

export const areIntervalsEqual = (a, b) => {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (!areIntervalEqual(a[i], b[i]))
            return false;
    }
    return true;
}