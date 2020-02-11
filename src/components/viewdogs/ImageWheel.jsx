import React from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

const slideStyle = (index, count) =>
{
	const step = 360 / count;
	const degrees = -step * index;
	const radians = degrees * (Math.PI / 180);

	const x = (Math.cos(radians) * 50) + 50;
	const y = (Math.sin(radians) * 50) + 50;

	return {
		left: `${x}%`,
		top: `${y}%`,
		transform: `translate(-50%, -50%) rotate(${degrees + 90}deg)`,
	};
};

const ImageWheel = ({ images, slideCount }) => (
	<div className="wheel-outline">
		<div className="wheel">
			{images.map((image, index) => (
				<TabLink url={image} key={image}>
					<div
						className="wheel-slide"
						style={slideStyle(index, slideCount)}
					>
						<img src={image} alt={image} />
					</div>
				</TabLink>
			))}
		</div>
		<div />
	</div>
);

ImageWheel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	slideCount: PropTypes.number.isRequired,
};

export default ImageWheel;
