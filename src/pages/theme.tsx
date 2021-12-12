import React from "react";
import styled from 'styled-components';
import { StyledPageBody } from "../components/_shared/layout/PageBody";
import PageTitle from "../components/_shared/layout/PageTitle";
import Card from "../components/_shared/ui/Card";
import THEME, { COLOR } from "../styles/theme";

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

const ThemePage: React.FC<any> = () => {
    return (
        <StyledThemePage>
            <PageTitle title="Theme" />
            <Card title="Brand">
                <div className="row">
                    <Swatch $color={THEME.active} />
                    <div>
                        <label>Primary</label>
                        <ul>
                            <li>State - Active, Selected</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={THEME.clickable} />
                    <div>
                        <label>Secondary</label>
                        <ul>
                            <li>Action - Interactive, Clickable</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={THEME.surface.nav} />
                    <div>
                        <label>Off-black (Navy)</label>
                        <ul>
                            <li>Site nav</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={THEME.surface.bg} />
                    <div>
                        <label>Off-white</label>
                        <ul>
                            <li>Site background</li>
                        </ul>
                    </div>
                </div>
            </Card>

            <Card title="Status">
                <div className="row">
                    <Swatch $color={THEME.clickable} />
                    <div>
                        <label>Positive</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={THEME.active} />
                    <div>
                        <label>Warning</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.red} />
                    <div>
                        <label>Negative / Error</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.lightBlue} />
                    <div>
                        <label>Information</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.ivory} />
                    <div>
                        <label>Highlight</label>
                    </div>
                </div>
            </Card>

            <Card title="Neutral">
                <div className="row">
                    <Swatch $color={COLOR.white} />
                    <div>
                        <label>White</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.light1} />
                    <div>
                        <label>Light 1</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.light2} />
                    <div>
                        <label>Light 2</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.light3} />
                    <div>
                        <label>Light 3</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.medium1} />
                    <div>
                        <label>Medium 1</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.medium2} />
                    <div>
                        <label>Medium 2</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.medium3} />
                    <div>
                        <label>Medium 3</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.dark1} />
                    <div>
                        <label>Dark 1</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.dark2} />
                    <div>
                        <label>Dark 2</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.dark3} />
                    <div>
                        <label>Dark 3</label>
                    </div>
                </div>
                <div className="row">
                    <Swatch $color={COLOR.black} />
                    <div>
                        <label>Black</label>
                    </div>
                </div>
            </Card>
        </StyledThemePage>
    );
};

export default ThemePage;
