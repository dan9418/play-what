import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { AnyPodListPreset, getPreset } from "../../../../../core/Core.derived";
import { getModelRoute } from "../../../../../core/Routing.utils";
import { usePageProps } from "../../../shared/utils/PagePropsContext";

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
        color: ${(props) => props.theme?.text?.secondary};
      }
    }
  }
`;

interface ICollectionListProps {
  data: AnyPodListPreset[];
}

const CollectionList: React.FC<ICollectionListProps> = ({ data }) => {
  const { rootId, presetType } = usePageProps().pageContext;
  return (
    <StyledCollectionList>
      {data.map((d) => {
        const preset = getPreset(presetType, d.presetId) as AnyPodListPreset;
        return (
          <li key={d.presetId}>
            <Link to={getModelRoute(presetType, d.presetId, rootId)}>
              {preset.name}
            </Link>
          </li>
        );
      })}
    </StyledCollectionList>
  );
};

export default CollectionList;
