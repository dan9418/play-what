import Concept from '../Concept';

export default class Scale extends Concept {
    constructor(id, name, intervals) {
        super(id, name, intervals);
    }

    copy() {
        let intervalsCopy = [...this.intervals];
        return new Scale(this.id, this.name, intervalsCopy);
    }

    reverse() {
        this.intervals.reverse();
        return this;
    }
}