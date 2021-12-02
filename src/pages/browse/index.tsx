import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { DEFAULT_BROWSE_TIERS } from "../../app/components/browse/BrowsePage.defaults";
import ListBuilder from "../../app/components/create/list-builder/ListBuilder";
import { StyledPageBody } from "../../app/components/shared/PageBody";
import PageControls from "../../app/components/shared/PageTitle";
import { dataListState } from "../../app/state/state";
import TieredDropdownInput, { UNSELECTED_KEY } from "../../ui/inputs/TieredDropdownInput";
import DEFAULT_FRETBOARD_PROPS from "../../ui/viewers/fretboard/Fretboard.defaults";

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
                        if (v.id !== UNSELECTED_KEY) {
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
