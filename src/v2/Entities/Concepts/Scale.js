import { SCALE } from "../../Tools/Presets";

export default class Scale {
    constructor(args) {
        if (args === 'string') {
            this.intervals = {...SCALE[args]};
        }
        else {
            console.error('Scale error');
            this.intervals = null;
        }
    }
}