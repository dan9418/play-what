import * as React from "react";
import {
  DEFAULT_FRETBOARD_PROPS,
  getDotsForFret,
  getFretRatios,
  IFretboardProps,
  IFretProps,
} from "../viewers/fretboard/Fretboard.utils";
import styled from "styled-components";

const StyledFretboard = styled.div`
  display: inline-grid;
  width: 100%;
  background-image: radial-gradient(ellipse, #e8dbb8 0%, #d0b27c 100%);
  font-size: 90%;
  margin: 16px 0;

  .fret {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-right: 2px solid darkgrey;
  }

  .fret.open {
    border-right: 3px solid grey;
    background-color: #d0b27c;
  }

  /* Used to maintain aspect ratio */

  .fret::before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    margin-top: calc(1 / 2 * 100%);
  }

  /* Fret String */

  .fret-string {
    border-top: 1px solid grey;
    width: 100%;
  }

  /* Fret Numbers */

  .fret-number {
    position: absolute;
    bottom: 100%;
  }

  /* Fret Dots */

  .fret-dots {
    position: absolute;
    top: 95%;
    font-size: 16px;
    white-space: nowrap;
  }

  .fret-number,
  .fret-dots {
    color: #888;
  }
`;

const StyledFretLabel = styled.div`
  position: absolute;
  height: 60%;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : "transparent")};
  color: ${({ $fgColor }) => ($fgColor ? $fgColor : "")};

  /*cursor: pointer;
	&:hover {
		height: 80%;
	}*/
`;

const FretLabel: React.FC<IFretProps> = (props) => {
  const bgColor = props.colorMapFn(props);

  let fgColor = "white";

  return (
    <StyledFretLabel
      $bgColor={bgColor}
      $fgColor={fgColor}
      onClick={null}
      className="fret-label"
    >
      {null}
    </StyledFretLabel>
  );
};

export const Fret: React.FC<IFretProps> = (props) => {
  const { tuning, stringIndex, fretIndex, showFretNumbers, showFretDots } =
    props;

  const classes = ["fret"];
  if (fretIndex === 0) classes.push("open");

  const isLowString = stringIndex === tuning.length - 1;
  const isHighString = stringIndex === 0;

  return (
    <div className={classes.join(" ")}>
      <div className="fret-number">
        {showFretNumbers && isHighString && fretIndex > 0 && fretIndex}
      </div>
      <div className="fret-string" />
      <FretLabel {...props} />
      <div className="fret-dots">
        {showFretDots &&
          isLowString &&
          fretIndex > 0 &&
          getDotsForFret(fretIndex)}
      </div>
    </div>
  );
};

const getFrets = (props: IFretboardProps) => {
  const { fretRange, tuning } = props;
  const [lo, hi] = fretRange;

  const allFrets: any[] = [];
  for (let s = 0; s < tuning.length; s++) {
    for (let f = lo; f <= hi; f++) {
      allFrets.push(
        <Fret
          key={`s${s}-f${f}`}
          stringIndex={s}
          fretIndex={f}
          tuning={tuning}
          {...props}
        />
      );
    }
  }
  return allFrets;
};

const OldFretboard: React.FC<IFretboardProps> = (userProps) => {
  const props = { ...DEFAULT_FRETBOARD_PROPS, ...userProps };

  const [lo, hi] = props.fretRange;
  const numFrets = hi - lo + 1;
  const numStrings = props.tuning.length;
  const gridTemplateColumns = getFretRatios(numFrets)
    .map((n) => n + "fr")
    .join(" ");
  const gridTemplateRows = `repeat(${numStrings}, 1fr)`;
  const fretboardStyles = {
    gridTemplateColumns,
    gridTemplateRows,
  };

  return (
    <StyledFretboard className="fretboard" style={fretboardStyles}>
      {getFrets(props)}
    </StyledFretboard>
  );
};

export default OldFretboard;
