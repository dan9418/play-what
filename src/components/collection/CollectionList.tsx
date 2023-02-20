import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRootId } from "../../contexts/PagePropsContext";
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
  data: any[];
}

const CollectionList: React.FC<ICollectionListProps> = ({ data }) => {
  const rootId = useRootId();
  return (
    <StyledCollectionList>
      {data.map((d) => {
        const model = POD_LIST_PRESETS.find(
          (preset) => preset.modelId === d.modelId
        );

        return (
          <li key={d.modelId}>
            <Link to={getModelRoute(d.modelType, d.modelId, rootId)}>
              {model.name}
            </Link>
          </li>
        );
      })}
    </StyledCollectionList>
  );
};

export default CollectionList;
