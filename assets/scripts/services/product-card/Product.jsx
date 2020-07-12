import React, { Component, h, Fragment } from 'preact';
import PropTypes from 'prop-types';
import { AnimatedSaleBanner, AnimatedSoldOut } from './components';

export class Product extends Component {
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(this.props.thumbnail);
	}

	render() {
		return (
			<Fragment>
				{this.props.onsale && <AnimatedSaleBanner />}
				<a href={this.props.link} title={`Bekijk ${this.props.title}`}>
					<picture>
						<source srcSet={this.thumbnail.webp} type={'image/webp'} />
						<img src={this.thumbnail.thumbnail} loading={'lazy'} alt={`Productafbeelding ${this.props.title}`} />
					</picture>
				</a>
				<main className="card-content">
					<a href={this.props.link}>
						<h2 className="is-h3">{this.props.title}</h2>
					</a>
					<p className="product-card--categories mb-2" dangerouslySetInnerHTML={{__html: this.props.categories}} />
					<p className="product-card--price" dangerouslySetInnerHTML={{__html:this.props.price}} />
					{!this.props.instock && <AnimatedSoldOut />}
				</main>
			</Fragment>
		)
	}
}

Product.propTypes = {
	thumbnail: PropTypes.exact({
		webp: PropTypes.string,
		thumbnail: PropTypes.string.required
	}),
	title: PropTypes.string.required,
	categories: PropTypes.string.required,
	price: PropTypes.string.required,
	link: PropTypes.string.required,
	instock: PropTypes.bool.required,
	onsale: PropTypes.bool.required,

	id: PropTypes.number,

}
