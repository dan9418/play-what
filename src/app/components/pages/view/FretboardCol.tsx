import React, { useState } from "react";
import styled from 'styled-components';
import { DEFAULT_FRETBOARD_PROPS } from "../../../../core/Fretboard.constants";
import { FRETBOARD_TUNING_VALUES, TuningId } from "../../../../core/Tuning.constants";
import { VOICING_OPTIONS } from "../../../../core/Voicing.constants";
import Fretboard from "../../shared/fretboard/Fretboard";
import DropdownInput from "../../shared/inputs/DropdownInput";
import NumericInput from "../../shared/inputs/NumericInput";
import SwitchInput from "../../shared/inputs/SwitchInput";
import Modal from "../../shared/layout/Modal";
import Card from "../../shared/ui/Card";
import CardFooterButton from "../../shared/ui/CardFooterButton";
import InputRow from "../../shared/ui/InputRow";
import CardSection from "./CardSection";
import MaximizeButton from "./MaximizeButton";
import { IFretboardState } from "./useFretboardState";
import { IModelState } from "./useModelState";

export const DEFAULT_VOICING = VOICING_OPTIONS[0];
export const DEFAULT_TUNING = FRETBOARD_TUNING_VALUES[0];
export const DEFAULT_FRET_RANGE = DEFAULT_FRETBOARD_PROPS.fretRange;

const StyledMainCol = styled.div`
    padding: 16px;
    .maximize {
        background-color: transparent !important;
    }
`;

const FretboardCol: React.FC<IFretboardState & IModelState> = ({
  voicing,
  tuning,
  fretRange,
  setVoicing,
  setTuning,
  setFretRange,
  showFretNumbers,
  setShowFretNumbers,
  showFretDots,
  setShowFretDots,
  presetConfig,
  root
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const filteredVoicings = VOICING_OPTIONS;
  /*.filter((v) => {
    if (!v.value) return true;
    const containsNonModelIntervals = v.value.some(
      (x) => x && !model.intervals.find((ivl) => ivl.pod[1] + 1 === x)
    );
    return !containsNonModelIntervals;
  });*/

  const [fretLo, fretHi] = fretRange;

  const viewer = <Fretboard
    podListPreset={presetConfig}
    rootNotePreset={root}
    fretRange={fretRange}
    showFretDots={showFretDots}
    showFretNumbers={showFretNumbers}
    //colorSchemeId={colorScheme}
    //voicingId={voicing.presetId}
    tuningId={tuning.presetId}
  />;

  return (
    <Card
      title="Fretboard"
      action={<MaximizeButton onClick={() => setIsFullScreen(true)} />}
    >
      {isFullScreen && (
        <Modal setIsOpen={setIsFullScreen}>
          <div className="resize">
            {viewer}
          </div>
        </Modal>
      )}
      <StyledMainCol>
        {viewer}
      </StyledMainCol>
      {isEditing && (
        <div>
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
        </div>
      )}
      <CardFooterButton isActive={isEditing} onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'DONE' : 'EDIT'}</CardFooterButton>
    </Card>
  );
};

export default FretboardCol;
