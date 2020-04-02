import { INTERVAL } from "../Tools/Presets";
import Chord from "./Concepts/Chord";
import Scale from "./Concepts/Scale";

export default class IntervalList {
    constructor(args) {
        if (args === 'object') {
            switch(args.strategy) {
                case 'INTERVAL_PAIR':
                    this.intervals = null;
                case 'CHORD':
                    this.intervals = new Chord(args.args);
                case 'SCALE':
                    this.intervals = new Scale(args.args);
                case 'MODE':
                    this.intervals = null;
                case 'ROMAN_NUMERAL':
                    this.intervals = null;
                default:
                    this.intervals = null;
            }
        }
        else {
            this.intervals = null;
        }
    }
}