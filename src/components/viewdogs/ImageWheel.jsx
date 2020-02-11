import React from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

const wheelClass = (rotating) => `wheel${rotating ? ' slide-move' : ''}`;

const ImageWheel = ({ images, rotating }) => (
	<div className="wheel-container">
		<div className="wheel-outline">
			<div className={wheelClass(rotating)}>
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
	rotating: PropTypes.bool,
};

ImageWheel.defaultProps = {
	rotating: false,
};

export default ImageWheel;
