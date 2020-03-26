import SoundUtils from "../Utils/SoundUtils";

const ActionBy = {

    none: {
        id: 'none',
        name: 'None',
        fx: () => null
    },

    logData: {
        id: 'logData',
        name: 'Log Data',
        fx: (note, viewerData) => {
            let output = {
                note: note,
                viewerData: viewerData
            }
            return () => {
                console.log(output);
            }
        }
    },

    playSound: {
        id: 'playSound',
        name: 'Play Sound',
        fx: (note, viewerData) => {
            return () => {
                SoundUtils.play(note.frequency, .5);
            }
        }
    }
}

export default ActionBy;