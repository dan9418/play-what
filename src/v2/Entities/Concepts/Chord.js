import { CHORD } from "../../Tools/Presets";
import Interval from "../Interval";
import { getNotes } from "../../Tools/Theory";

export default class Chord {
    constructor(args) {
        if (typeof args === 'string') {
            this.intervals = [...CHORD[args.preset].value.intervals].map(i => new Interval(i));
        }
        else if (typeof args === 'object') {
            if(args.preset) {
                this.intervals = [...CHORD[args.preset].value.intervals].map(i => new Interval(i));
            }
        }
        else {
            console.error('Chord error')
            return;
        }
    }
    getNotes(keyCenter) {
        return getNotes(this.intervals, keyCenter);
    }
}