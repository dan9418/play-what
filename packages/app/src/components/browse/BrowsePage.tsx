import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import TieredDropdownInput, { UNSELECTED_KEY } from "../../../../ui/src/inputs/TieredDropdownInput";
import DEFAULT_FRETBOARD_PROPS from "../../../../ui/src/viewers/fretboard/Fretboard.defaults";
import { dataListState } from "../../state/state";
import ListBuilder from "../create/list-builder/ListBuilder";
import { StyledPageBody } from "../shared/PageBody";
import PageControls from "../shared/PageTitle";
import { DEFAULT_BROWSE_TIERS } from "./BrowsePage.defaults";

const StyledBrowsePage = styled(StyledPageBody)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .dropdown-container {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`;

const BrowsePage: React.FC<any> = () => {

    const [dataList, setDataList] = useRecoilState(dataListState);

    return (
        <StyledBrowsePage>
            <PageControls title="Browse Ideas" subtitle="Select a category to get started..." />
            <div className="dropdown-container">
                <TieredDropdownInput
                    currentTier={DEFAULT_BROWSE_TIERS}
                    onChange={(v, i, cur, par) => {
                        console.log('dpb onChange', v, i, cur, par)
                        let newDataList = [];
                        if (cur.id === 'practice' || cur.id === 'charts') {
                            newDataList = v.value;
                        }
                        else if (cur.id === 'intervals') {
                            newDataList = [{
                                root: [0, 0],
                                intervals: [v.value],
                                viewerProps: DEFAULT_FRETBOARD_PROPS
                            }]
                        }
                        else if (cur.id !== 'cat') {
                            newDataList = [{
                                root: [0, 0],
                                intervals: v.value,
                                viewerProps: DEFAULT_FRETBOARD_PROPS
                            }]
                        }
                        setDataList(newDataList);
                    }}
                />
            </div>
            <ListBuilder />
        </StyledBrowsePage>
    );
};

export default BrowsePage;
