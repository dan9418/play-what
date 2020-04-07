import { CHORD } from "../../Tools/Presets";
import Interval from "../Interval";
import Theory from "../../Tools/Theory";

export default class Chord {
    constructor(args) {
        if (typeof args === 'string') {
            this.intervals = [...CHORD[args.preset].intervals].map(i => new Interval(i));
        }
        else if (typeof args === 'object') {
            if(args.preset) {
                this.intervals = [...CHORD[args.preset].intervals].map(i => new Interval(i));
            }
        }
        else {
            console.error('Chord error')
            return;
        }
    }
    getNotes(keyCenter) {
        return Theory.getNotes(this.intervals, keyCenter);
    }
}