import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { dataIndexState, dataListState } from "../../../state/state";
import ViewerController from "../viewer/ViewerController";

const StyledListBuilder = styled.ul`
    width: 100%;
    margin-bottom: auto;
    max-width: 1024px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    > li {
        margin-top: 16px;
        width: 100%;
        border: 1px solid #bbb;
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
    const dataList = useRecoilValue(dataListState);
    const dataIndex = useRecoilValue(dataIndexState);

    return (
        <StyledListBuilder>
            {dataList.map((data, i) => (
                <li key={i} className={dataIndex === i ? 'active' : ''}>
                    <ViewerController
                        listIndex={i}
                    />
                </li>
            ))}
        </StyledListBuilder>
    );
};

export default ListBuilder;
