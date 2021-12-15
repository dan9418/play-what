import React from "react";
import { useSetRecoilState } from "recoil";
import styled, { useTheme } from 'styled-components';
import ButtonInput from "../components/_shared/inputs/ButtonInput";
import { StyledPageBody } from "../components/_shared/layout/PageBody";
import PageTitle from "../components/_shared/layout/PageTitle";
import Card, { StyledCard } from "../components/_shared/ui/Card";
import { themeState } from "../state/state";
import THEME, { DARK_THEME } from "../styles/theme";
import { useSetTheme } from "../styles/ThemeManager";

const StyledThemePage = styled(StyledPageBody)`
    max-width: 1024px;
    .grid {
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media(min-width: 512px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    .theme-btns {
        margin-top: 16px;
        display: grid;
        gap: 16px;
        grid-template-columns: 1fr;
        @media(min-width: 512px) {
            grid-template-columns: 1fr 1fr;
        }

        button {
            width: 100%;
        }
    }

    ${StyledCard} {
        margin-bottom: 16px;
    }

    .row {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
        //justify-content: space-between;
        .text {
            display: flex;
            flex-direction: column;
            gap: 4px;
            label {
                font-weight: bold;
                font-size: 120%;
            }
            li {
                list-style-type: circle;
                margin-left: 16px;
                font-style: italic;
            }
            span {
                color: ${props => props.theme.text.secondary};
            }
        }
    }
`;

const Swatch = styled.input`
    appearance: none;
	border: none;
    cursor: pointer;
    height: 64px;
    width: 64px;
    border: 1px solid black;
    background-color: ${props => props.$color};
`;

const SwatchSelector: React.FC<any> = ({ type, attr, title }) => {
    const setTheme = useSetTheme();
    const theme = useTheme();
    let color;
    if (type) {
        color = theme[type][attr];
    }
    else {
        color = theme[attr];
    }
    return (
        <div className="row">
            <Swatch
                type="color"
                $color={color}
                value={color}
                onChange={e => setTheme(e.target.value, attr, type)}
            />
            <div className="text">
                <label>{title}</label>
                <span>{color}</span>
            </div>
        </div>
    );
}

const ThemePage: React.FC<any> = () => {
    const setTheme = useSetRecoilState(themeState);
    return (
        <StyledThemePage>
            <PageTitle title="Theme" />
            <div className="theme-btns">
                <ButtonInput onClick={() => setTheme(THEME)} >Reset Light Theme</ButtonInput>
                <ButtonInput onClick={() => setTheme(DARK_THEME)} >Reset Dark Theme</ButtonInput>
            </div>
            <div className="grid">
                <div>
                    <Card title="Brand">
                        <SwatchSelector title="Primary" type="brand" attr="primary" />
                        <SwatchSelector title="Secondary" type="brand" attr="secondary" />
                    </Card>

                    <Card title="Action">
                        <SwatchSelector title="Active" type="action" attr="active" />
                        <SwatchSelector title="Interactive" type="action" attr="interactive" />
                    </Card>

                    <Card title="Status">
                        <SwatchSelector title="Positive" type="status" attr="positive" />
                        <SwatchSelector title="Negative" type="status" attr="negative" />
                        <SwatchSelector title="Warning" type="status" attr="warning" />
                        <SwatchSelector title="Info" type="status" attr="info" />
                        <SwatchSelector title="Highlight" type="status" attr="highlight" />
                    </Card>
                    {/*<Card title="Palette">
                        <SwatchSelector title="Dark Blue" attr="darkBlue" />
                        <SwatchSelector title="Light Blue" attr="lightBlue" />
                        <SwatchSelector title="Green" attr="green" />
                        <SwatchSelector title="Orange" attr="orange" />
                        <SwatchSelector title="Red" attr="red" />
                        <SwatchSelector title="Ivory" attr="ivory" />
                    </Card>
                    <Card title="Neutral">
                        <SwatchSelector title="White" attr="white" />
                        <SwatchSelector title="Light 1" attr="light1" />
                        <SwatchSelector title="Light 2" attr="light2" />
                        <SwatchSelector title="Light 3" attr="light3" />
                        <SwatchSelector title="Medium 1" attr="medium1" />
                        <SwatchSelector title="Medium 2" attr="medium2" />
                        <SwatchSelector title="Medium 3" attr="medium3" />
                        <SwatchSelector title="Dark 1" attr="dark1" />
                        <SwatchSelector title="Dark 2" attr="dark2" />
                        <SwatchSelector title="Dark 3" attr="dark3" />
                        <SwatchSelector title="Black" attr="black" />
                    </Card>*/}
                </div>
                <div>
                    <Card title="Surface">
                        <SwatchSelector title="Navigation" type="surface" attr="nav" />
                        <SwatchSelector title="Background" type="surface" attr="bg" />
                        <SwatchSelector title="Card" type="surface" attr="card" />
                    </Card>

                    <Card title="Text">
                        <SwatchSelector title="Primary" type="text" attr="primary" />
                        <SwatchSelector title="Secondary" type="text" attr="secondary" />
                        <SwatchSelector title="Inverted" type="text" attr="inverted" />
                    </Card>

                    <Card title="Utility">
                        <SwatchSelector title="Border" type="utils" attr="border" />
                        <SwatchSelector title="Hover Dark" type="utils" attr="hoverDark" />
                        <SwatchSelector title="Hover Light" type="utils" attr="hoverLight" />
                    </Card>
                </div>
            </div>
        </StyledThemePage>
    );
};

export default ThemePage;
