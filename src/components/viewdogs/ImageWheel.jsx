import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/viewdogs.module.scss';

const wheelClass = (rotating) => [
	styles.wheel,
	...rotating ? [styles.slidemove] : [],
].join(' ');

const ImageWheel = ({ images, rotating, onClick }) => (
	<div className={styles.wheelcontainer}>
		<div className={styles.wheeloutline}>
			<div className={wheelClass(rotating)}>
				{images.map((image) => (
					<button
						className={styles.wheelslide}
						type="button"
						onClick={onClick ? () => onClick(image) : null}
						key={image}
					>
						<img src={image} alt={image} />
					</button>
				))}
			</div>
		</div>
	</div>
);

ImageWheel.propTypes = {
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	rotating: PropTypes.bool,
	onClick: PropTypes.func,
};

ImageWheel.defaultProps = {
	rotating: false,
	onClick: null,
};

export default ImageWheel;
