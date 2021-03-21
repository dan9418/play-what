"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var RouteContext_1 = require("../../contexts/RouteContext");
var ButtonInput_1 = __importDefault(require("../ui/inputs/buttons/ButtonInput"));
var StyledAbout = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\th1, p, button {\n\t\tmargin: 32px auto;\n\t\tdisplay: block;\n\t\tmax-width: 512px;\n\t}\n"], ["\n\th1, p, button {\n\t\tmargin: 32px auto;\n\t\tdisplay: block;\n\t\tmax-width: 512px;\n\t}\n"])));
var About = function () {
    var routeContext = RouteContext_1.useRouteContext();
    return (<StyledAbout>
			<h1>Play What?</h1>
			<p>
				Play What is a toolkit for modeling and analyzing musical concepts.
				The project is under active development and is slated for initial release in early 2021.
			</p>
			<p>
				Visit the <a href="https://github.com/dan9418/play-what">documentation</a> to understand the core concepts then check out the app to explore its capabilities:
			</p>
			<ButtonInput_1.default onClick={function () { return routeContext.setPageId(RouteContext_1.PAGE_ID.Explorer); }}>Explore!</ButtonInput_1.default>
		</StyledAbout>);
};
exports.default = About;
var templateObject_1;
