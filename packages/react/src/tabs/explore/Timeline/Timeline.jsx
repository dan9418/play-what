
import React from 'react';
import 'react-hot-loader';
import './Timeline.css';

const Timeline = ({ frames, frameIndex }) => {
	return (
		<>
			<section className="timeline">
				<section className="playback-bar">
					{frames.map(frame => {
						return (
							<div key={frame.id}>
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
