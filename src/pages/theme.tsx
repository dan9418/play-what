import React from "react";
import styled, { useTheme } from 'styled-components';
import { StyledPageBody } from "../components/_shared/layout/PageBody";
import PageTitle from "../components/_shared/layout/PageTitle";
import Card from "../components/_shared/ui/Card";

const StyledThemePage = styled(StyledPageBody)`
	display: flex;
	flex-direction: column;
    gap: 16px;
    max-width: 1024px;

    .row {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
        //justify-content: space-between;

        label {
            font-weight: bold;
            font-size: 140%;
        }
        li {
            list-style-type: circle;
            margin-left: 16px;
            font-style: italic;
        }
    }

`;

const Swatch = styled.div`
    height: 64px;
    width: 64px;
    border: 1px solid black;
    background-color: ${props => props.$color};
`;

const SwatchSelector: React.FC<any> = ({ type, value, title }) => {
    const theme = useTheme();
    let color;
    if (type) {
        color = theme[type][value];
    }
    else {
        color = theme[value];
    }
    return (
        <div className="row">
            <Swatch $color={color} />
            <div>
                <label>{title}</label>
            </div>
        </div>
    );
}

const ThemePage: React.FC<any> = () => {
    return (
        <StyledThemePage>
            <PageTitle title="Theme" />
            <Card title="Brand">
                <SwatchSelector title="Primary" type="brand" value="primary" />
                <SwatchSelector title="Secondary" type="brand" value="secondary" />
                <SwatchSelector title="Dark" type="brand" value="dark" />
                <SwatchSelector title="Light" type="brand" value="light" />
            </Card>

            <Card title="Status">
                <SwatchSelector title="Positive" type="status" value="positive" />
                <SwatchSelector title="Negative" type="status" value="negative" />
                <SwatchSelector title="Warning" type="status" value="warning" />
                <SwatchSelector title="Info" type="status" value="info" />
                <SwatchSelector title="Highlight" type="status" value="highlight" />
            </Card>

            <Card title="Neutral">
                <SwatchSelector title="White" value="white" />
                <SwatchSelector title="Light 1" value="light1" />
                <SwatchSelector title="Light 2" value="light2" />
                <SwatchSelector title="Light 3" value="light3" />
                <SwatchSelector title="Medium 1" value="medium1" />
                <SwatchSelector title="Medium 2" value="medium2" />
                <SwatchSelector title="Medium 3" value="medium3" />
                <SwatchSelector title="Dark 1" value="dark1" />
                <SwatchSelector title="Dark 2" value="dark2" />
                <SwatchSelector title="Dark 3" value="dark3" />
                <SwatchSelector title="Black" value="black" />
            </Card>
        </StyledThemePage>
    );
};

export default ThemePage;
