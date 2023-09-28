import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { IIntervalPreset, INTERVAL_PRESET_MAP, IntervalId } from "../../../../core/Interval.constants";
import { getName as getIntervalName } from "../../../../core/Interval.utils";
import { getName as getNoteName } from "../../../../core/Note.utils";
import { addPods, getRootedName } from "../../../../core/Pod.utils";
import { getModelRoute } from "../../../../core/Routing.utils";
import CardSection from "./CardSection";
import { IModelState } from "./useModelState";

const StyledDetailsCol = styled.div`
  .name {
    font-size: 140%;
    display: block;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      margin: 8px;
      text-align: center;
      .note {
        font-weight: bold;
        font-size: 120%;
      }
      .interval {
        color: ${(props) => props.theme?.text?.secondary};
      }
    }
  }
  .notes {
    min-height: 128px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const DetailsCol: React.FC<IModelState> = (props) => {
  const {
    presetType,
    presetConfig,
    root,
  } = props;

  const intervalIds = presetConfig.valueIds;

  return (
    <StyledDetailsCol>
      <CardSection>
        <div className="notes">
          <Link
            to={getModelRoute(
              presetType.id,
              presetConfig.presetId,
              root.presetId
            )}
            className="name"
          >
            {getRootedName(presetConfig, root)}
          </Link>
          <div className="info">
            {intervalIds.map((ivl, i) => {
              const intervalPreset = INTERVAL_PRESET_MAP.get(ivl as IntervalId) as IIntervalPreset;
              const intervalPod = intervalPreset.pod;
              const intervalName = getIntervalName(intervalPod)
              const notePod = root && addPods(root.pod, intervalPreset.pod);
              const noteName = notePod && getNoteName(notePod);

              return (
                <div key={i} className="item">
                  <div className="note">{noteName}</div>
                  <div className="interval">{intervalName}</div>
                </div>
              )
            })}
          </div>
        </div>
      </CardSection>
    </StyledDetailsCol>
  );
};

export default DetailsCol;
