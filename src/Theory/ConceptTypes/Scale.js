import Concept from '../Concept';

export default class Scale extends Concept {
    constructor(id, name, intervals) {
        super(id, name, intervals);
    }

    reverse() {
        this.intervals.reverse();
        return this;
    }
}