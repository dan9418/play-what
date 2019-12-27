import { IntervalWrapper } from "./IntervalWrapper";
import FunctionalNote from "./FunctionalNote";

export default class Concept {
    constructor(id = '', name = '', intervals = []) {
        this.intervals = intervals[0] instanceof IntervalWrapper ? intervals : intervals.map(i => new IntervalWrapper(i));
        this.id = id;
        this.name = name;
    }
    getNotes(keyCenter) {
        let notes = this.intervals.map(i => new FunctionalNote(keyCenter, i));
        return notes;
    }
}