import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootId } from "../../contexts/PagePropsContext";
import { IChordPreset } from "../../core/models/Chord.constants";
import {
  AnyPodListPreset,
  POD_LIST_PRESETS,
} from "../../core/models/Model.derived";
import { IScalePreset } from "../../core/models/Scale.constants";
import { getModelRoute } from "../../core/routing/Routing.utils";

const StyledCollectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  a {
    padding: 2px;
  }
  li {
    &:not(:last-child) {
      ::after {
        content: ", ";
        color: ${(props) => props.theme.text.secondary};
      }
    }
  }
`;

interface ICollectionListProps {
  data: AnyPodListPreset[];
}

const CollectionList: React.FC<ICollectionListProps> = ({ data }) => {
  const rootId = useRootId();
  return (
    <StyledCollectionList>
      {data.map((d) => {
        const model = POD_LIST_PRESETS.find(
          (preset) => preset.presetId === d.presetId
        );

        return (
          <li key={d.presetId}>
            <Link to={getModelRoute(d.presetType, d.presetId, rootId)}>
              {model.name}
            </Link>
          </li>
        );
      })}
    </StyledCollectionList>
  );
};

export default CollectionList;
