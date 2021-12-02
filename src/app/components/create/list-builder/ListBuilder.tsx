import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from 'styled-components';
import Icon from "../../../../ui/Icon";
import ButtonInput from "../../../../ui/inputs/ButtonInput";
import { dataIndexState, dataListState } from "../../../state/state";
import ViewerController from "../viewer/ViewerController";
import NewViewerCard from "./NewViewerCard";

const StyledListBuilder = styled.ul`
    width: 100%;
    margin-bottom: auto;
    max-width: 1024px;

    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;
    @media(min-width: 512px) {
        ${props => props.$length > 1 ? 'grid-template-columns: 1fr 1fr;' : ''}
    }

    > li {
        margin-top: 16px;
        width: 100%;
        &.insert {
            > button {
                margin: 32px auto;
                width: 80%;

                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    fill: white;
                    margin-right: 8px;

                    * {
                        fill: white;
                    }
                }
            }
        }
        &:not(.insert) {
            border: 1px solid #bbb;
            border-radius: 8px;

            &.active {
                border: 2px solid ${props => props.theme.active};
            }
        }
    }
    
    .fretboard, .keyboard {
        //box-shadow: 0px 0px 30px 30px rgba(0,0,0,0.08);
        max-width: 1024px;
    }
`;


const ListBuilder: React.FC<any> = ({ isInsertAllowed = false }) => {
    const dataIndex = useRecoilValue(dataIndexState);
    const [dataList, setDataList] = useRecoilState(dataListState);

    const [isInsertingViewer, setIsInsertingViewer] = useState(false);

    return (
        <StyledListBuilder $length={dataList.length}>
            {isInsertingViewer ?
                <NewViewerCard onDone={() => setIsInsertingViewer(false)} />
                :
                <>
                    {dataList.map((data, i) => (
                        <li key={i} className={dataIndex === i ? 'active' : ''}>
                            <ViewerController
                                listIndex={i}
                            />
                        </li>
                    ))}
                    {isInsertAllowed &&
                        <li className="insert">
                            <ButtonInput onClick={() => setIsInsertingViewer(true)} >
                                <Icon iconId="plus" />
                                <span>INSERT VIEWER</span>
                            </ButtonInput>
                        </li>
                    }
                </>
            }
        </StyledListBuilder>
    );
};

export default ListBuilder;
