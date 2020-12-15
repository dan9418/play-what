import React from 'react';

const Docs = () => {
	return (
		<div className='docs'>
			<h1>API Documentation</h1>
			<h2>Coming Soon!</h2>
			<p>
                For now, here are some useful links:
			</p>
			<ul>
				<li>Current</li>
				<ul>
					<li>
						<a href="https://dan9418.github.io/play-what/">App</a>
					</li>
					<li>
						<a href="https://github.com/dan9418/play-what">Monorepo</a>
					</li>
				</ul>
				<li>Beta</li>
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
			</ul>
		</div>
	)
};

export default Docs;
