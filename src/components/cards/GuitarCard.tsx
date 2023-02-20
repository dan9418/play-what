import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import FretTable from "../../viewers/fret-table/FretTable";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

const StyledGuitarCard = styled.div`
  .customize {
    display: flex;
    align-items: center;
  }
`;

const GuitarCard: React.FC<any> = ({ model }) => {
  if (!model.root || !model.intervals) return null;

  const qp = new URLSearchParams({
    presetId: model.presetId,
    modelType: model.modelType,
    rootId: model.root.presetId,
  });

  return (
    <Card
      title="Fretboard"
      action={
        <Link className="customize" to={`/view/fretboard?${qp.toString()}`}>
          Customize <Icon iconId="next" size={8} />
        </Link>
      }
    >
      <StyledGuitarCard>
        <FretTable model={model} />
      </StyledGuitarCard>
    </Card>
  );
};

export default GuitarCard;
