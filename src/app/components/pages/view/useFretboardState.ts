import { useState } from "react";
import { COLOR_SCHEME_PRESETS } from "../../../../core/Color.utils";
import { DEFAULT_FRETBOARD_PROPS } from "../../../../core/Fretboard.constants";
import { FRETBOARD_TUNING_VALUES } from "../../../../core/Tuning.constants";
import { VOICING_OPTIONS } from "../../../../core/Voicing.constants";

export const DEFAULT_VOICING = VOICING_OPTIONS[0];
export const DEFAULT_TUNING = FRETBOARD_TUNING_VALUES[0];
export const DEFAULT_FRET_RANGE = DEFAULT_FRETBOARD_PROPS.fretRange;

export interface IFretboardState {
    voicing, setVoicing,
    tuning, setTuning,
    fretRange, setFretRange,
    colorScheme, setColorScheme,
    colorConfig, setColorConfig
}

const useFretboardState = () => {
    const [voicing, setVoicing] = useState(DEFAULT_VOICING);
    const [tuning, setTuning] = useState(DEFAULT_TUNING);
    const [fretRange, setFretRange] = useState(DEFAULT_FRET_RANGE);
    const [colorScheme, _setColorScheme] = useState(COLOR_SCHEME_PRESETS[1]);
    const [colorConfig, setColorConfig] = useState(colorScheme.defaultConfig);

    const setColorScheme = (cs) => {
        _setColorScheme(cs);
        setColorConfig(cs.defaultConfig);
    };

    return {
        voicing, setVoicing,
        tuning, setTuning,
        fretRange, setFretRange,
        colorScheme, setColorScheme,
        colorConfig, setColorConfig
    }
};

export default useFretboardState;
