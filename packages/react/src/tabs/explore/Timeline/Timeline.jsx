
import { COLOR_FN } from '@pw/core/src/Color.constants';
import ColorUtils from '@pw/core/src/Color.utils';
import React from 'react';
import './Timeline.css';

const getNextPosition = (position, measures) => {
	const lastMeasure = position[0] === measures.length - 1;
	const lastBeat = position[1] === measures[position[0]].length - 1;

	if (lastMeasure && lastBeat) {
		return [0, 0];
	}
	if (lastBeat) {
		return [position[0] + 1, 0];
	}
	return [position[0], position[1] + 1];
}

const Timeline = ({ frameset, position, setPosition }) => {
	const measureScope = frameset.measures.length;

	const beatNum = 4;
	const beatType = 4;

	const scopeStyle = {
		gridTemplateColumns: `repeat(${measureScope}, 1fr)`
	};

	const measureStyle = {
		gridTemplateColumns: `repeat(${beatNum}, 1fr)`
	};

	return (
		<>
			<section className="timeline">
				<section className="playback-bar">
					<span>{`${beatNum}/${beatType}`}</span>
					<button>Play</button>
					<button>Pause</button>
					<button>Stop</button>
					<button>Prev</button>
					<button onClick={() => setPosition(getNextPosition(position, frameset.measures))}>Next</button>
				</section>
				<section className="measure-container" style={scopeStyle}>
					{frameset.measures.map((measure, i) => {
						const classes = ['measure'];
						if (i === position[0]) classes.push('active');
						return (
							<div key={i} className={classes.join(' ')} style={measureStyle}>
								{measure.map((beat, j) => {
									const classes = ['beat'];
									const active = i === position[0] && j === position[1];
									if (active) classes.push('active');
									return (
										<div key={j} className={classes.join(' ')} >
											<div className="beat-tab">{j}</div>
											{Array.from('p'.repeat(12)).map((b, k) => {
												const classes = ['pitch'];
												const pod = beat.find(b => b[0] === k);
												const color = COLOR_FN.pitch.value(pod)
												const colorStyles = ColorUtils.getStylesFromBgColor(color);
												return (
													<div key={k} className={classes.join(' ')} style={colorStyles} >

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
