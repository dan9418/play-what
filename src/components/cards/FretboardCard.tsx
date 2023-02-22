import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { IModelConfig } from "../../core/models/Model.constants";
import Fretboard from "../fretboard/Fretboard";
import Card from "../ui/Card";
import Icon from "../ui/Icon";

const StyledFretboardCard = styled.div`
  .customize {
    display: flex;
    align-items: center;
  }
`;

interface IFretboardCardProps {
  modelConfig: IModelConfig;
  rootModelConfig?: IModelConfig;
}

const FretboardCard: React.FC<IFretboardCardProps> = ({
  modelConfig,
  rootModelConfig,
}) => {
  if (!modelConfig || !rootModelConfig) return null;

  const qp = new URLSearchParams({
    presetId: modelConfig.presetId,
    modelType: modelConfig.modelType,
    rootId: rootModelConfig.presetId,
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
      <StyledFretboardCard>
        <Fretboard
          modelConfig={modelConfig}
          rootModelConfig={rootModelConfig}
        />
      </StyledFretboardCard>
    </Card>
  );
};

export default FretboardCard;
