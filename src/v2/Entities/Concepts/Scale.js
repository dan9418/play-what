import { SCALE } from "../../Tools/Presets";
import Interval from "../Interval";
import Theory from "../../Tools/Theory";

export default class Scale {
    constructor(args) {
        if (typeof args === 'string') {
            this.intervals = [...SCALE[args].intervals].map(i => new Interval(i));
        }
        else if (typeof args === 'object') {
            if(args.preset) {
                this.intervals = [...SCALE[args.preset].intervals].map(i => new Interval(i));
            }
        }
        Object.freeze(this);
    }
    getNotes(keyCenter) {
        return Theory.getNotes(this.intervals, keyCenter);
    }
}