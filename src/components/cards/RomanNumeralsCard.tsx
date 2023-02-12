import React from "react";
import { css } from "styled-components";
import { NoteId } from "../../core/models/Model.constants";
import Scale from "../../core/models/Scale";
import { getModelRoute } from "../../core/routing/Routing.utils";
import Card from "../ui/Card";
import { Table } from "../ui/Table";

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;

  th {
    //color: ${(props) => props.theme.brand.accent};
    &:first-child {
      text-align: right;
    }
    padding: 4px;
  }

  td {
    padding: 4px;
    text-align: center;
    sup {
      font-size: 80%;
    }
  }

  .numeral td {
    font-size: 160%;
    font-family: serif;
  }
`;

interface IRomanNumeralsCardProps {
  model: Scale;
  title?: string;
}

const RomanNumeralsCard: React.FC<IRomanNumeralsCardProps> = ({ model, title = "Roman Numerals" }) => {
  const numerals = model.getAllNumerals();

  if (!numerals.length) return null;

  return (
    <Card title={title}>
      <Table
        styles={tableStyles}
        headerColIndicies={[0]}
        tbody={[
          {
            className: "numeral",
            cols: [
              "Numeral",
              ...numerals.map((n, i) => {
                const [numeral, symbol] = n.getNumeralParts(i + 1);
                return {
                  content: (
                    <>
                      {numeral}
                      <sup className="symbol">{symbol}</sup>
                    </>
                  ),
                };
              }),
            ],
          },
          {
            cols: ["Degree", ...numerals.map((n, i) => i + 1)],
          },
          {
            cols: [
              "Name",
              ...numerals.map((n, i) => ({
                link: getModelRoute(n.modelType, n.modelId, n.root.modelId),
                content: n.getShortName(),
              })),
            ],
          },
        ]}
      />
    </Card>
  );
};

export default RomanNumeralsCard;
