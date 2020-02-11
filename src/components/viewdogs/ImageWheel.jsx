import React from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

const ImageWheel = ({ images }) => (
	<div className="wheel-container">
		<div className="wheel-outline">
			<div className="wheel">
				{images.map((image) => (
					<TabLink url={image} key={image}>
						<div
							className="wheel-slide"
						>
							<img src={image} alt={image} />
						</div>
					</TabLink>
				))}
			</div>
		</div>
	</div>
);

ImageWheel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageWheel;
