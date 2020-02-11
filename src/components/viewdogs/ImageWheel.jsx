import React from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

const slideStyle = (index, count) =>
{
	const step = 360 / count;
	const degrees = step * index;
	const radians = degrees * (Math.PI / 180);

	const x = ((Math.cos(radians) / 2) + 0.5) * 100;
	const y = ((Math.sin(radians) / 2) + 0.5) * 100;

	return {
		left: `${x}%`,
		top: `${y}%`,
		transform: `translate(-50%, -50%) rotate(${degrees + 90}deg)`,
	};
};

const ImageWheel = ({ images }) => (
	<div className="wheel-outline">
		<div className="wheel">
			{images.map((image, index) => (
				<TabLink url={image} key={image}>
					<div
						className="wheel-slide"
						style={slideStyle(index, images.length)}
					>
						<img src={image} alt={image} />
					</div>
				</TabLink>
			))}
		</div>
	</div>
);

ImageWheel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageWheel;
