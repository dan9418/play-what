export const max = {
    p: 12,
    d: 7
};

export const areEqual = ({ interval1, interval2 }) => {
    if (!interval1 || !interval2) return false;
    return interval1.p === interval2.p && interval1.d === interval2.d;
}