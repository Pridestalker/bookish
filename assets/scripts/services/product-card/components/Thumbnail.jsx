import React, { Component, Fragment, h } from 'preact';
import PropTypes from 'prop-types';

export class Thumbnail extends Component {
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(props.thumbnail);
	}

	render() {
		return (
			<a href={this.props.link} title={`Bekijk ${this.props.title}`}>
				<picture>
					<source srcSet={this.thumbnail.webp} type={'image/webp'} />
					<img src={this.thumbnail.thumbnail} loading={'lazy'} alt={`Productafbeelding ${this.props.title}`} style={{
						filter: this.props.outofstock? 'grayscale(1)': '',
					}} />
				</picture>
			</a>
		)
	}
}

Thumbnail.propTypes = {
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	thumbnail: PropTypes.exact({
		webp: PropTypes.string,
		thumbnail: PropTypes.string.isRequired
	}),

	outofstock: PropTypes.bool
}
