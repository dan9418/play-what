import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CHART_PRESETS,
  getParsedChart,
} from "../../../../../core/models/Chart.constants";
import { PresetType } from "../../../../../core/models/Model.constants";
import { getNotefromValue } from "../../../../../core/models/Model.generation";
import {
  NOTE_PRESETS,
  NOTE_PRESET_MAP,
} from "../../../../../core/models/Model.constants";
import {
  addPods,
  reducePod,
  subtractPods,
} from "../../../../../core/models/Pod.utils";
import { getModelRoute } from "../../../../../core/routing/Routing.utils";
import DropdownInput from "../../../../inputs/DropdownInput";
import PageLayout from "../../../../layout/PageLayout";
import Card, { StyledCard } from "../../../../ui/Card";
import InputRow, { StyledInputRow } from "../../../../ui/InputRow";

const StyledPracticePage = styled(PageLayout)`
  ${StyledCard}, ${StyledInputRow} {
    margin: 16px 0;
  }

  .sections {
    gap: 16px;

    h3 {
      font-size: 120%;
      margin: 16px 0;
    }
  }

  .chords {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
  }

  .chord {
    white-space: nowrap;
    border-radius: 8px;
    //border: 1px solid ${(props) => props.theme?.utils?.border};
    background-color: ${(props) => props.theme?.action?.interactive};
    color: white;
    //height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    @media (min-width: 512px) {
      flex-direction: row;
    }

    :hover {
      background-color: ${(props) => props.theme?.action?.active};
    }

    &.t-2 {
      aspect-ratio: 1;
      font-size: 80%;
    }

    &.t-2 {
      aspect-ratio: 2;
      font-size: 90%;
    }

    &.t-4 {
      font-size: 100%;
      aspect-ratio: 4;
    }

    &.t-8 {
      aspect-ratio: 8;
      font-size: 120%;
    }

    &.t-16 {
      aspect-ratio: 16;
      font-size: 140%;
    }

    .root-name {
      font-weight: bold;
      font-size: 140%;
    }

    .structure-name {
      font-size: 140%;
    }
  }
`;

const Page: React.FC<any> = () => {
  const [chartPreset, setChartPreset] = useState(CHART_PRESETS[0]);
  const [keyCenter, setKeyCenter] = useState(CHART_PRESETS[0].value.keyCenter);

  useEffect(() => {
    setKeyCenter(chartPreset.value.keyCenter);
  }, [chartPreset.presetId]);

  const chart = getParsedChart(chartPreset.value);

  const diff = reducePod(
    subtractPods(
      NOTE_PRESET_MAP.get(keyCenter).value,
      NOTE_PRESET_MAP.get(chartPreset.value.keyCenter).value
    ),
    [12, 7]
  );

  return (
    <StyledPracticePage title="Chord Charts">
      <InputRow label="Chart">
        <DropdownInput
          options={CHART_PRESETS}
          value={chartPreset}
          setValue={setChartPreset}
        />
      </InputRow>
      <InputRow label="Key Center">
        <DropdownInput
          options={NOTE_PRESETS}
          value={{ presetId: keyCenter }}
          setValue={(v) => setKeyCenter(v.presetId)}
        />
      </InputRow>
      <Card title={chart.name}>
        <ul className="sections">
          {chart.sections.map((s, i) => {
            return (
              <li key={i}>
                <h3>Section {s.name}</h3>
                <ul className="chords">
                  {s.chords.map((c, j) => {
                    const { chord, structureName, t } = c;
                    const adjustedPod = reducePod(
                      addPods(chord.root.pod, diff),
                      [12, 7]
                    );

                    let adjustedRoot;
                    try {
                      adjustedRoot = getNotefromValue(adjustedPod);
                    } catch (e) {
                      return <li>?</li>;
                    }

                    //const adjustedChord = new Chord(chord.presetId as ChordId, { root: adjustedRoot });
                    const rootName = adjustedRoot.name;
                    return (
                      <li key={j} style={{ gridColumn: `span ${t / 2}` }}>
                        <Link
                          to={getModelRoute(
                            PresetType.Chord,
                            chord.presetId,
                            adjustedRoot.presetId
                          )}
                          className={`chord t-${t}`}
                        >
                          <div className="root-name">{rootName}</div>
                          <sup className="structure-name">{structureName}</sup>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Card>
    </StyledPracticePage>
  );
};

export default Page;
