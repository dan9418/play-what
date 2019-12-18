import Concept from '../Concept';

export default class Scale extends Concept {
    constructor(id, name, intervals) {
        super(id, name, intervals);
    }

    reverse() {
        let intervalsCopy = [...this.intervals];
        intervalsCopy.reverse();
        return new Scale(this.id, this.name, intervalsCopy);
    }
}