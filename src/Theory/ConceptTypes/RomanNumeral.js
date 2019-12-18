import Chord from "./Chord";
import CommonUtils from "../../Utils/CommonUtils";
import { Interval } from "../Interval";

export default class RomanNumeral extends Chord {
    constructor(sourceScale, degree) {
        let intervals = degree ? RomanNumeral._getIntervals(sourceScale, degree) : sourceScale.intervals;
        let relativeIntervals = RomanNumeral._getRelativeIntervals(intervals);

        let id = degree ? `${sourceScale.id}_rn${degree}` : sourceScale.id;
        let name = degree ? RomanNumeral.getName(relativeIntervals, degree) : sourceScale.name;

        super(id, name, intervals);

        this.sourceScale = sourceScale;
        this.relativeIntervals = relativeIntervals;
    }

    static _getRelativeIntervals(intervals) {
        return intervals.map(ivl => ivl.subtract(intervals[0]));
    }

    static _getIntervals(sourceScale, degree) {
        degree = degree;
        let validDegrees = [
            degree,
            CommonUtils.moduloSum(degree, 3, 7, 1),
            CommonUtils.moduloSum(degree, 5, 7, 1)
        ];
        let newIntervals = sourceScale.intervals.filter(interval => validDegrees.includes(interval.degree));
        while (newIntervals[0].degree < degree) {
            let first = newIntervals.shift();
            let { degree, semitones, id, name, ascending } = first;
            let copy = new Interval(degree, semitones, id, name, ascending, 1);
            newIntervals.push(copy);
        }
        return newIntervals;
    }

    static getName(intervals, degree) {
        let quality = RomanNumeral.getQuality(intervals);
        switch (quality) {
            case 'Dim':
                return RomanNumeral.getDimName(degree);
            case 'Min':
                return RomanNumeral.getMinName(degree);
            case 'Maj':
                return RomanNumeral.getMajName(degree);
            case 'Aug':
                return RomanNumeral.getAugName(degree);
        }
    }

    static getDimName(degree) {
        return RomanNumeral.getMinName(degree) + '°';
    }

    static getAugName(degree) {
        return RomanNumeral.getMajName(degree) + '+';
    }

    static getMinName(degree) {
        switch (degree) {
            case 1:
                return 'i';
            case 2:
                return 'ii';
            case 3:
                return 'iii';
            case 4:
                return 'iv';
            case 5:
                return 'v';
            case 6:
                return 'vi';
            case 7:
                return 'vii';
        }
    }

    static getMajName(degree) {
        switch (degree) {
            case 1:
                return 'I';
            case 2:
                return 'II';
            case 3:
                return 'III';
            case 4:
                return 'IV';
            case 5:
                return 'V';
            case 6:
                return 'VI';
            case 7:
                return 'VII';
        }
    }

    static getQuality(intervals) {
        let root = intervals[0];
        let third = intervals[1];
        let fifth = intervals[2];
        if (third.id === 'm3' && fifth.id === 'd5') {
            return 'Dim';
        }
        else if (third.id === 'm3' && fifth.id === 'P5') {
            return 'Min';
        }
        else if (third.id === 'M3' && fifth.id === 'P5') {
            return 'Maj';
        }
        else if (third.id === 'M3' && fifth.id === 'A5') {
            return 'Aug';
        }
        else {
            return 'Unknown';
        }
    }
}