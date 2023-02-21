import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootId } from "../../contexts/PagePropsContext";
import { IModelConfig } from "../../core/models/Model.constants";
import { POD_LIST_PRESETS } from "../../core/models/Model.presets";
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
  data: IModelConfig[];
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
