import React from "react";
import styled from "styled-components";
import ColumnManager from "../../shared/layout/ColumnManager";
import PageLayout from "../../shared/layout/PageLayout";
import { StyledCardSection } from "./CardSection";
import FretboardCol from "./FretboardCol";
import NotesCol from "./NotesCol";
import useFretboardState from "./useFretboardState";
import useModelQueryParams from "./useModelQueryParams";
import useModelState from "./useModelState";

const StyledFretboardPage = styled(PageLayout)`
  ${StyledCardSection} {
    margin-top: 16px;
  }
`;

const Page: React.FC = () => {
    const [qpPresetType, qpPresetId, qpRootId] = useModelQueryParams();

    const modelState = useModelState(qpPresetType, qpPresetId, qpRootId);
    const fretboardState = useFretboardState();

    return (
        <StyledFretboardPage hideHeader>
            <ColumnManager desktop={["1fr", "1fr"]}>
                <div>
                    <FretboardCol {...fretboardState} {...modelState} />
                </div>
                <div>
                    <NotesCol {...modelState} />
                </div>
            </ColumnManager>
        </StyledFretboardPage>
    );
};

export default Page;
