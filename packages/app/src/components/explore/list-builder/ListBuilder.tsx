import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import PodListUtils from "../../../../../core/src/models/PodList/PodList.utils";
import { dataIndexState, dataListState } from "../../../state/state";
import ViewerController from "../viewer/ViewerController";

const StyledListBuilder = styled.ul`
    width: 100%;
    margin-bottom: auto;
    max-width: 1024px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: auto;

    li {
        margin-top: 16px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 8px;

        &.active {
            border: 2px solid ${props => props.theme.active};
        }
    }
    
    .fretboard, .keyboard {
        //box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
        max-width: 1024px;
    }
`;


const ListBuilder: React.FC<any> = () => {
    const [dataList, setDataList] = useRecoilState(dataListState);
    const [dataIndex, setDataIndex] = useRecoilState(dataIndexState);

    return (
        <StyledListBuilder>
            {dataList.map((data, i) => (
                <li key={i} className={dataIndex === i ? 'active' : ''}>
                    <ViewerController
                        listIndex={i}
                        details={PodListUtils.getDetails(data.root, data.intervals)}
                    />
                </li>
            ))}
        </StyledListBuilder>
    );
};

export default ListBuilder;
