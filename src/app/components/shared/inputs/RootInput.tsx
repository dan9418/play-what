import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { INotePreset, NOTE_PRESET_MAP, NoteId } from "../../../../core/Note.constants";
import Card from "../ui/Card";
import { usePageProps } from "../utils/PagePropsContext";
import ButtonInput from "./ButtonInput";

const StyledRootInput = styled(Card)`
  .spelling {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  a:not(.clear) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    letter-spacing: 2px;

    padding: 8px;
    border-radius: 4px;

    &:hover,
    &.active {
      background-color: ${(props) => props.theme?.action?.active};
      color: white;
    }
  }
  .clear {
    margin-left: 8px;
    font-size: 110%;
  }
`;

const Col: React.FC<any> = ({ basePath, rootKey }) => {
  const name = (NOTE_PRESET_MAP.get(rootKey) as INotePreset).name;
  return (
    <div className="col">
      <Link
        activeClassName="active"
        to={`${basePath}root/${rootKey}-sharp`}
      >
        {`${name}#`}
      </Link>
      <Link activeClassName="active" to={`${basePath}root/${rootKey}`}>
        {name}
      </Link>
      <Link
        activeClassName="active"
        to={`${basePath}root/${rootKey}-flat`}
      >
        {`${name}b`}
      </Link>
    </div>
  );
};

const RootInput: React.FC<any> = ({ onCancel }) => {
  const pageProps = usePageProps();
  const { pathname } = pageProps.location;

  const hasRoot = pathname.includes('/root/');

  const rootIndex = pageProps.path.lastIndexOf("root");
  const basePath = hasRoot ? pathname.slice(0, rootIndex) : pathname;
  const rootKey = hasRoot ? pathname.slice(rootIndex + 5, rootIndex + 6) : pathname;

  return (
    <StyledRootInput
      title={`${hasRoot ? 'Edit' : 'Set'} Root`}
      action={(
        <div>
          {onCancel &&
            <ButtonInput onClick={onCancel} isLink>
              Cancel
            </ButtonInput>
          }
          {hasRoot &&
            <Link className="clear" to={`${basePath}`}>
              Clear
            </Link>
          }
        </div>
      )}>
      <div className="spelling">
        <Col basePath={basePath} rootKey={NoteId.C} />
        <Col basePath={basePath} rootKey={NoteId.D} />
        <Col basePath={basePath} rootKey={NoteId.E} />
        <Col basePath={basePath} rootKey={NoteId.F} />
        <Col basePath={basePath} rootKey={NoteId.G} />
        <Col basePath={basePath} rootKey={NoteId.A} />
        <Col basePath={basePath} rootKey={NoteId.B} />
      </div>
    </StyledRootInput>
  );
};

export default RootInput;
