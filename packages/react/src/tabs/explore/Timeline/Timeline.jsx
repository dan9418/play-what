
import React from 'react';
import 'react-hot-loader';
import './Timeline.css';

const Timeline = ({ frames, frameIndex, setFrameIndex }) => {
	return (
		<>
			<section className="timeline">
				<section className="playback-bar">
					<button>Play</button>
					<button>Pause</button>
					<button>Stop</button>
					<button>Prev</button>
					<button>Next</button>
				</section>
				<section className="frame-bar">
					{frames.map((frame, i) => {
						const classes = ['frame'];
						if (frameIndex === i)
							classes.push('active');
						return (
							<div key={frame.id} className={classes.join(' ')} onClick={() => setFrameIndex(i)}>
								{frame.name}
							</div>
						);
					})}
				</section>
			</section>
		</>
	);
};

export default Timeline;
