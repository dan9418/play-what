import { Interval } from "./Interval";

export default class Concept {
    constructor(id = '', name = '', intervals = []) {
        this.intervals = intervals.map(i => new Interval(i));
        this.id = id;
        this.name = name;
    }
}