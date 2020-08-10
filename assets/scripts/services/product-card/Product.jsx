import React, { Component, h, Fragment } from 'preact';
import PropTypes from 'prop-types';
import { AnimatedSaleBanner, AnimatedSoldOut } from './components';

export class Product extends Component {
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(this.props.thumbnail);
		this.renderPrice = this.renderPrice.bind(this);
	}

	renderPrice() {
		const { onsale, saleprice, price } = this.props;

		if (!!onsale) {
			return (<Fragment>&euro; <span style='text-decoration: line-through;'>{price}</span> {saleprice}</Fragment>);
		}

		return ( <Fragment>&euro; {price}</Fragment> )
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
					<p className="product-card--price">
						{this.renderPrice()}
					</p>
					{!this.props.instock && <AnimatedSoldOut />}
				</main>
			</Fragment>
		)
	}
}

Product.propTypes = {
	thumbnail: PropTypes.exact({
		webp: PropTypes.string,
		thumbnail: PropTypes.string.isRequired
	}),
	title: PropTypes.string.isRequired,
	categories: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	instock: PropTypes.bool.isRequired,
	onsale: PropTypes.bool.isRequired,
	saleprice: PropTypes.string,

	id: PropTypes.number,

}
