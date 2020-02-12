import React from 'react';
import PropTypes from 'prop-types';

import TabLink from '../TabLink';

import styles from '../../styles/viewdogs.module.scss';

const wheelClass = (rotating) => [
	styles.wheel,
	...rotating ? [styles.slidemove] : [],
].join(' ');

const ImageWheel = ({ images, rotating }) => (
	<div className={styles.wheelcontainer}>
		<div className={styles.wheeloutline}>
			<div className={wheelClass(rotating)}>
				{images.map((image) => (
					<TabLink url={image} key={image}>
						<div
							className={styles.wheelslide}
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
