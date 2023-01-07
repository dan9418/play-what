import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useRoot, useRootSuffix } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import { ModelType, NoteId } from "../../core/models/Model.constants";
import Scale from "../../core/models/Scale";
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
  const rootSuffix = useRootSuffix();
  const root = useRoot();
  return (
    <StyledCollectionList>
      {data.map((d) => {
        const cl = d.modelType === ModelType.Chord ? Chord : Scale;
        // @ts-ignore
        const model = new cl(d.modelId, { root });

        return (
          <li key={d.modelId}>
            <Link
              to={getModelRoute(d.modelType, d.modelId, rootSuffix as NoteId)}
            >
              {model.name}
            </Link>
          </li>
        );
      })}
    </StyledCollectionList>
  );
};

export default CollectionList;
