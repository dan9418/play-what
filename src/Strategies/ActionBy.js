import SoundUtils from "../Utils/SoundUtils";

export default class ActionBy {

    static none() {
        return () => null;
    }

    static logData(note, viewerData) {
        let output = {
            note: note,
            viewerData: viewerData
        }
        return () => {
            console.log(output);
        }
    }

    static playSound(note, viewerData) {
        return () => {
            ActionStrategies.log(note, viewerData);
            SoundUtils.play(note.frequency, .5);
        }
    }
}
