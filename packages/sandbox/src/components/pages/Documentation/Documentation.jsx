import React from 'react';
import styled from 'styled-components';

const StyledDocumentation = styled.div`
	height: 100%;
	width: 100%;
	max-width: 512px;
	margin: auto;

	& h1, h2, h3, h4, h5 {
		margin: 16px 0;
		&:first-child {
			margin-top: 0;
		}
	}
	& p {
		margin: 16px 0;
	}
`;

const StyledSourceCode = styled.div`
background-color: #ddd;
padding: 16px;
border-radius: 16px;
	& li {
		padding: 4px;
	}
	& ul {
		margin-left: 16px;
	}
`;

const Documentation = () => {
	return (
		<StyledDocumentation>
			<h1>Documentation</h1>

			<StyledSourceCode>
				<h2>Source Code</h2>
				<p>
					This is an open source project, but the code is not yet ready for public contribution.
					Details will be published here when available.
					For now, here are some useful links:
				</p>

				<h3>Current</h3>
				<ul>
					<li>
						<a href="https://dan9418.github.io/play-what/">App</a>
					</li>
					<li>
						<a href="https://github.com/dan9418/play-what">Monorepo</a>
					</li>
				</ul>
				<h3>Beta</h3>
				<ul>
					<li>Sample</li>
					<ul>
						<li>
							<a href="https://github.com/dan9418/play-what-sample">Demo</a>
						</li>
						<li>
							<a href="https://github.com/dan9418/play-what-sample">Repo</a>
						</li>
					</ul>
					<li>Sandbox</li>
					<ul>
						<li>
							<a href="https://github.com/dan9418/play-what-sandbox">Demo</a>
						</li>
						<li>
							<a href="https://dan9418.github.io/play-what-sandbox/">Repo</a>
						</li>
					</ul>
					<li>Packages</li>
					<ul>
						<li>
							<a href="https://github.com/dan9418/play-what-beta">Repo (Core)</a>
						</li>
						<li>
							<a href="https://github.com/dan9418/play-what-react-viewers">Repo (React)</a>
						</li>
					</ul>
				</ul>

			</StyledSourceCode>
		</StyledDocumentation>
	)
};

export default Documentation;
