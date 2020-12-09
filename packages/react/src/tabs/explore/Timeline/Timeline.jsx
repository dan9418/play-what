
import React from 'react';
import 'react-hot-loader';
import './Timeline.css';

const Timeline = ({ frames, frameIndex, setFrameIndex }) => {
	const measureScope = 5;

	const beatNum = 4;
	const beatType = 4;

	const scopeStyle = {
		gridTemplateColumns: `repeat(${measureScope}, 1fr)`
	};

	const measureStyle = {
		gridTemplateColumns: `repeat(${beatNum}, 1fr)`
	}

	return (
		<>
			<section className="timeline">
				<section className="playback-bar">
					<span>{`${beatNum}/${beatType}`}</span>
					<button>Play</button>
					<button>Pause</button>
					<button>Stop</button>
					<button>Prev</button>
					<button>Next</button>
				</section>
				<section className="measure-container" style={scopeStyle}>
					{Array.from('m'.repeat(measureScope)).map((m, i) => {
						const classes = ['measure'];
						return (
							<div key={i} className={classes.join(' ')} style={measureStyle}>
								{Array.from('b'.repeat(beatNum)).map((b, j) => {
									const classes = ['beat'];
									return (
										<div key={j} className={classes.join(' ')} >
											{Array.from('p'.repeat(12)).map((b, k) => {
												const classes = ['pitch'];
												return (
													<div key={k} className={classes.join(' ')} >

													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						);
					})}
				</section>
			</section>
		</>
	);
};

export default Timeline;
