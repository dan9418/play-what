import React from "react";
import styled, { css } from "styled-components";
import { FEEDBACK_LINK } from "../../config/constants";
import ColumnManager from "../column-manager/ColumnManager";
import PageLayout from "../layout/PageLayout";
import Card from "../ui/Card";
import { SimpleList } from "../ui/List";
import { Table } from "../ui/Table";

const StyledComingSoonPage = styled(PageLayout)``;

const tableStyles = css`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    padding: 8px;
    text-align: left;
    vertical-align: top;
  }

  th {
    border-bottom: 1px solid ${(props) => props.theme.utils.border};
  }

  tr:not(:last-child) {
    td {
      border-bottom: 1px solid ${(props) => props.theme.utils.border};
    }
  }
`;

const Page: React.FC<any> = () => {
  return (
    <StyledComingSoonPage title="Coming Soon" subtitle="Potential Features">
      <ColumnManager>
        <Card title="Release Schedule">
          <Table
            styles={tableStyles}
            thead={[
              {
                cols: ["Release", "Version", "Date"],
              },
            ]}
            tbody={[
              {
                cols: ["Public User Beta", "0.1.0", "8/5/22"],
              },
              {
                cols: ["Official Launch", "1.0.0", "2023"],
              },
              {
                cols: [
                  {
                    colSpan: 3,
                    content: (
                      <SimpleList
                        items={[
                          "Possible name change",
                          "Fresh logo",
                          "Sharing features",
                          "Chord progressions",
                          "Cadences",
                          "More tunings/voicings",
                          "Open source license",
                          "Technical documentation",
                          "Bug fixes",
                        ]}
                      />
                    ),
                  },
                ],
              },
              {
                cols: ["Future Versions", "X.0.0", "TBD"],
              },
              {
                cols: [
                  {
                    colSpan: 3,
                    content: (
                      <SimpleList
                        items={[
                          "Build-your-own practice materials",
                          "Grand staff viewer",
                          "Chord inversions",
                          "Rhythm support",
                          "Sound support",
                          "Ear training",
                          "User accounts",
                          "...and more!",
                        ]}
                      />
                    ),
                  },
                ],
              },
            ]}
          />
        </Card>
        <Card title="Request A Feature">
          <p>
            <a target="_blank" href={FEEDBACK_LINK}>
              Use this form
            </a>{" "}
            to submit a feature request or provide feedback.
          </p>
        </Card>
      </ColumnManager>
    </StyledComingSoonPage>
  );
};

export default Page;
