import { CHORD } from "../../Tools/Presets";
import Interval from "../Interval";

export default class Chord {
    constructor(args) {
        if (typeof args === 'string') {
            this.intervals = [...CHORD[args].value.intervals];
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
}