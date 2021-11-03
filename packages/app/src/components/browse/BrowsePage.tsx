import React from "react";
import { useRecoilState } from "recoil";
import styled from 'styled-components';
import { IChartConfig } from "../../../../core/src/models/Chart/Chart.constants";
import { NOTE_PRESET_MAP } from "../../../../core/src/models/Pod/Note/Note.constants";
import { CHORD_PRESET_MAP } from "../../../../core/src/models/PodList/Chord/Chord.constants";
import TieredDropdownInput, { UNSELECTED_KEY } from "../../../../ui/src/inputs/TieredDropdownInput";
import { dataListState, IDataItem } from "../../state/state";
import { PRACTICE_CAGED } from "../create/CreatePage.defaults";
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

const getChartListData = (config: IChartConfig): IDataItem[] => {
    const items = [];

    for (let s = 0; s < config.sections.length; s++) {
        const section = config.sections[s];

        for (let c = 0; c < section.chords.length; c++) {
            const chord = section.chords[c];
            const [noteId, chordId, t] = chord;

            const root = NOTE_PRESET_MAP.get(noteId).value || [0, 0];
            const intervals = CHORD_PRESET_MAP.get(chordId).value || [];

            items.push({
                root,
                intervals
            });
            //...(new Array((t / 2) - 1).fill(<div className="rest" >/</div>))
        }
    }

    return items;
}

const BrowsePage: React.FC<any> = () => {

    const [dataList, setDataList] = useRecoilState(dataListState);

    return (
        <StyledBrowsePage>
            <PageControls title="Browse Ideas" subtitle="Select a category to get started..." />
            <div className="dropdown-container">
                <TieredDropdownInput
                    currentTier={DEFAULT_BROWSE_TIERS}
                    onChange={(v, i, cur, par) => {
                        let newDataList = [];
                        console.log('dpb onChange', v, i, cur, par)
                        if (v.id !== UNSELECTED_KEY) {
                            if (cur.id === 'cat') {
                                if (v.id === 'charts') {
                                    newDataList = [];
                                }
                                else if (v.id === 'practice') {
                                    newDataList = PRACTICE_CAGED;
                                }
                            }
                            if (cur.id === 'charts') {
                                newDataList = getChartListData(v.value);
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