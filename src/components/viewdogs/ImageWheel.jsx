import React from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

const ImageWheel = ({ images }) => (
	<div>
		{images.map((image) => (
			<TabLink url={image} key={image}>
				<div className="wheel-slide">
					<img src={image} alt={image} />
				</div>
			</TabLink>
		))}
	</div>
);

ImageWheel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageWheel;
