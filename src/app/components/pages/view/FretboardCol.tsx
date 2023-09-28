import React from "react";
import { DEFAULT_FRETBOARD_PROPS } from "../../../../core/Fretboard.constants";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../../core/Tuning.constants";
import { VOICING_OPTIONS } from "../../../../core/Voicing.constants";
import DropdownInput from "../../shared/inputs/DropdownInput";
import NumericInput from "../../shared/inputs/NumericInput";
import SwitchInput from "../../shared/inputs/SwitchInput";
import InputRow from "../../shared/ui/InputRow";
import CardSection from "./CardSection";
import { IFretboardState } from "./useFretboardState";

export const DEFAULT_VOICING = VOICING_OPTIONS[0];
export const DEFAULT_TUNING = FRETBOARD_TUNING_VALUES[0];
export const DEFAULT_FRET_RANGE = DEFAULT_FRETBOARD_PROPS.fretRange;

const FretboardCol: React.FC<IFretboardState> = ({
  voicing,
  tuning,
  fretRange,
  setVoicing,
  setTuning,
  setFretRange,
  showFretNumbers,
  setShowFretNumbers,
  showFretDots,
  setShowFretDots
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
      <CardSection title="Details">
        <InputRow label="Fret Dots">
          <SwitchInput
            value={showFretDots}
            setValue={setShowFretDots}
          />
        </InputRow>
        <InputRow label="Fret Numbers">
          <SwitchInput
            value={showFretNumbers}
            setValue={setShowFretNumbers}
          />
        </InputRow>
      </CardSection>
    </>
  );
};

export default FretboardCol;
