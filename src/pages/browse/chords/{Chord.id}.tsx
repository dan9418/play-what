import { CHORD_PRESETS } from "../../../core/models/PodList/Chord/Chord.constants";

const Page = props => {
    console.log(props);
    console.log(props.params.id);

    const chord = CHORD_PRESETS.find(c => c.id.toLowerCase() === props.params.id)

    return chord.name;
}

export default Page;
