import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
import { useRoot, useRootSuffix } from "../../contexts/PagePropsContext";
import Chord from "../../core/models/Chord";
import { ModelType } from "../../core/models/Model.constants";
import Scale from "../../core/models/Scale";

const StyledCollectionList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    a {
        padding: 4px 8px;
        &:not(:last-child) {
            ::after {
                content: ', ';
            }
        }
    }
`;

interface ICollectionListProps {
    data: any[]
}

const CollectionList: React.FC<ICollectionListProps> = ({ data }) => {
    const rootSuffix = useRootSuffix();
    const root = useRoot();
    return (
        <StyledCollectionList>
            {
                data.map(d => {
                    const cl = d.modelType === ModelType.Chord ? Chord : Scale;
                    // @ts-ignore
                    const model = new cl(d.modelId, { root });

                    return (
                        <li key={d.modelId}>
                            <Link to={`/browse/${d.modelType}/${d.modelId}/${rootSuffix}`}>
                                {model.name}
                            </Link>
                        </li>
                    );
                })
            }
        </StyledCollectionList>
    );
};

export default CollectionList;
