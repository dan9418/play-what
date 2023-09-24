import React from "react";
import { DEFAULT_FRETBOARD_PROPS } from "../../../../core/Fretboard.constants";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../../core/Tuning.constants";
import { VOICING_PRESETS, VoicingId } from "../../../../core/Voicing.constants";
import DropdownInput from "../../shared/inputs/DropdownInput";
import NumericInput from "../../shared/inputs/NumericInput";
import InputRow from "../../shared/ui/InputRow";
import CardSection from "./CardSection";

const VOICING_OPTIONS = [
  {
    id: VoicingId.None,
    name: "---",
    value: undefined,
  },
  ...VOICING_PRESETS,
];

export interface IFretboardColProps {
  voicing;
  tuning;
  fretRange;
  setVoicing;
  setTuning;
  setFretRange;
}

export const DEFAULT_VOICING = VOICING_OPTIONS[0];
export const DEFAULT_TUNING = FRETBOARD_TUNING_VALUES[0];
export const DEFAULT_FRET_RANGE = DEFAULT_FRETBOARD_PROPS.fretRange;

const FretboardCol: React.FC<IFretboardColProps> = ({
  voicing,
  tuning,
  fretRange,
  setVoicing,
  setTuning,
  setFretRange,
}) => {
  const filteredVoicings = VOICING_OPTIONS;
  /*.filter((v) => {
    if (!v.value) return true;
    const containsNonModelIntervals = v.value.some(
      (x) => x && !model.intervals.find((ivl) => ivl.pod[1] + 1 === x)
    );
    return !containsNonModelIntervals;
  });*/

  const [fretLo, fretHi] = fretRange;

  return (
    <>
      <CardSection title="Tuning">
        <InputRow label="Preset">
          <DropdownInput
            value={tuning}
            setValue={setTuning}
            options={FRETBOARD_TUNING_VALUES}
          />
        </InputRow>
        {tuning.id === TuningId.Standard && (
          <InputRow label="Voicing">
            <DropdownInput
              value={voicing}
              setValue={setVoicing}
              options={filteredVoicings}
            />
          </InputRow>
        )}
      </CardSection>
      <CardSection title="Range">
        <InputRow label="Low Fret">
          <NumericInput
            value={fretLo}
            min={0}
            max={fretHi}
            setValue={(v) => setFretRange([v, fretHi])}
          />
        </InputRow>
        <InputRow label="High Fret">
          <NumericInput
            value={fretHi}
            min={fretLo}
            max={24}
            setValue={(v) => setFretRange([fretLo, v])}
          />
        </InputRow>
      </CardSection>
    </>
  );
};

export default FretboardCol;
