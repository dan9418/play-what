import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { PresetType } from "../../../core/models/Model.constants";
import { getModelRoute } from "../../../core/routing/Routing.utils";
import ColumnManager from "../../column-manager/ColumnManager";
import PageLayout from "../../layout/PageLayout";
import Card from "../../ui/Card";
import Icon from "../../ui/Icon";

const StyledBrowsePage = styled(PageLayout)`
  a.all {
    display: block;
    font-size: 140%;
    text-align: right;
    margin-top: 32px;
  }
`;

const Page: React.FC = () => {
  return (
    <StyledBrowsePage title="Browse">
      <ColumnManager desktop={["1fr", "1fr"]}>
        <Card title="Chords">
          <Link to={getModelRoute(PresetType.Chord)} className="all">
            See All Chords <Icon iconId="next" size={12} />
          </Link>
        </Card>
        <Card title="Scales">
          <Link to={getModelRoute(PresetType.Scale)} className="all">
            See All Scales <Icon iconId="next" size={12} />
          </Link>
        </Card>
      </ColumnManager>
    </StyledBrowsePage>
  );
};

export default Page;
