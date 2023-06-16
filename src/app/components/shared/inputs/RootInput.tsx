import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { INotePreset, NOTE_PRESET_MAP, NoteId } from "../../../../core/Note.constants";
import InputRow from "../ui/InputRow";
import { usePageProps } from "../utils/PagePropsContext";

const StyledRootInput = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;

  .spelling,
  .accidental {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .accidental > a:nth-child(2) {
    width: 64px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 32px;
    width: 32px;
    border-radius: 4px;

    &:hover,
    &.active {
      background-color: ${(props) => props.theme?.action?.active};
      color: white;
    }
  }
`;

const RootInput: React.FC = () => {
  const pageProps = usePageProps();
  const { pathname } = pageProps.location;

  const hasRoot = pathname.includes('/root/');

  const rootIndex = pageProps.path.lastIndexOf("root");
  const basePath = hasRoot ? pathname.slice(0, rootIndex) : pathname;
  const rootKey = hasRoot ? pathname.slice(rootIndex + 5, rootIndex + 6) : pathname;

  return (
    <StyledRootInput>
      <InputRow label={hasRoot ? "Spelling" : undefined} y>
        <div className="spelling">
          <Link activeClassName="active" to={`${basePath}root/${NoteId.C}`}>
            {(NOTE_PRESET_MAP.get(NoteId.C) as INotePreset).name}
          </Link>
          <Link activeClassName="active" to={`${basePath}root/${NoteId.D}`}>
            {(NOTE_PRESET_MAP.get(NoteId.D) as INotePreset).name}
          </Link>
          <Link activeClassName="active" to={`${basePath}root/${NoteId.E}`}>
            {(NOTE_PRESET_MAP.get(NoteId.E) as INotePreset).name}
          </Link>
          <Link activeClassName="active" to={`${basePath}root/${NoteId.F}`}>
            {(NOTE_PRESET_MAP.get(NoteId.F) as INotePreset).name}
          </Link>
          <Link activeClassName="active" to={`${basePath}root/${NoteId.G}`}>
            {(NOTE_PRESET_MAP.get(NoteId.G) as INotePreset).name}
          </Link>
          <Link activeClassName="active" to={`${basePath}root/${NoteId.A}`}>
            {(NOTE_PRESET_MAP.get(NoteId.A) as INotePreset).name}
          </Link>
          <Link activeClassName="active" to={`${basePath}root/${NoteId.B}`}>
            {(NOTE_PRESET_MAP.get(NoteId.B) as INotePreset).name}
          </Link>
        </div>
      </InputRow>
      {hasRoot && (
        <InputRow label="Accidental" y>
          <div className="accidental">
            <Link
              activeClassName="active"
              to={`${basePath}root/${rootKey}-flat`}
            >
              b
            </Link>
            <Link activeClassName="active" to={`${basePath}root/${rootKey}`}>
              none
            </Link>
            <Link
              activeClassName="active"
              to={`${basePath}root/${rootKey}-sharp`}
            >
              #
            </Link>
          </div>
        </InputRow>
      )}
    </StyledRootInput>
  );
};

export default RootInput;
