import SoundUtils from "../Utils/SoundUtils";

export default class ActionStrategies {
    static nop() {
        return () => null;
    }

    static log(note, viewerData) {
        let output = {
            note: note,
            viewerData: viewerData
        }
        return () => {
            console.log(output);
        }
    }

    static sound(note, viewerData) {
        return () => {
            ActionStrategies.log(note, viewerData);
            SoundUtils.play(note.frequency, .5);
        }
    }
}
