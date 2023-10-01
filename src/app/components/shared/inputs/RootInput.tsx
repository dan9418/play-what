import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { INotePreset, NOTE_PRESET_MAP, NoteId } from "../../../../core/Note.constants";
import { StyledCard } from "../ui/Card";
import { usePageProps } from "../utils/PagePropsContext";

const StyledRootInput = styled(StyledCard)`
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
    font-weight: normal;
    font-size: 90%;
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
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

const RootInput: React.FC = () => {
  const pageProps = usePageProps();
  const { pathname } = pageProps.location;

  const hasRoot = pathname.includes('/root/');

  const rootIndex = pageProps.path.lastIndexOf("root");
  const basePath = hasRoot ? pathname.slice(0, rootIndex) : pathname;
  const rootKey = hasRoot ? pathname.slice(rootIndex + 5, rootIndex + 6) : pathname;

  return (
    <StyledRootInput>
      <h3>Root
        {hasRoot &&
          <Link className="clear" to={`${basePath}`}>
            Clear
          </Link>
        }
      </h3>
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
