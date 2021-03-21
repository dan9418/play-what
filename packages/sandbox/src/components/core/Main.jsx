
const React = require("react");
import styled from 'styled-components';
import { PathNavContextProvider } from '../../contexts/PathNavContext';
import { RouteContextConsumer } from '../../contexts/RouteContext';

const StyledMain = styled.main`
	padding: 48px 8px 0;
	margin: auto;
	width: 100%;
	max-width: 1024px;
	min-height: 100%;
`;

const Main = () => {
	return (
		<StyledMain>
			<PathNavContextProvider>
				<RouteContextConsumer>
					{({Component}) => <Component />}
				</RouteContextConsumer>
			</PathNavContextProvider>
		</StyledMain>
	);
};

export default Main;
