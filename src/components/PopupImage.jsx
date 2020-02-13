import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/popupimage.module.scss';

const animationSeconds = 0.25; // popupimage.module.scss, $_animationTime
const milliseconds = 1000;
const animationTime = animationSeconds * milliseconds;

class PopupImage extends React.Component
{
	static propTypes = {
		src: PropTypes.string.isRequired,
		alt: PropTypes.string,
		onHidden: PropTypes.func,
	};

	static defaultProps = {
		alt: null,
		onHidden: null,
	};

	constructor(props)
	{
		super(props);
		this.state = { hiding: false };
	}

	componentDidMount()
	{

	}

	getClasses()
	{
		const { hiding } = this.state;
		return [
			styles.popupimage,
			...hiding ? [styles.hiding] : [],
		].join(' ');
	}

	onClick = () =>
	{
		this.setState({ hiding: true });
		const { onHidden } = this.props;
		if (onHidden)
		{
			setTimeout(onHidden, animationTime);
		}
	};

	render()
	{
		const { src, alt } = this.props;
		return (
			<button
				className={this.getClasses()}
				onClick={this.onClick}
				type="button"
			>
				<img src={src} alt={alt || src} />
			</button>
		);
	}
}

export default PopupImage;
