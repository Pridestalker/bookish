import React, { Component, h, Fragment, createRef } from 'preact';
import PropTypes from 'prop-types';
import { AnimatedSaleBanner, AnimatedSoldOut, AnimatedPreOrderBanner } from './components';
import { woocommerce } from '../../helpers';

export class Product extends Component {
	card = createRef();

	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(this.props.thumbnail);

		this.state = {
			inView: false,
		}

		this.renderPrice = this.renderPrice.bind(this);
		this.renderPreOrderBanner = this.renderPreOrderBanner.bind(this);
		this.cardIsInView = this.cardIsInView.bind(this);
	}

	cardIsInView() {
		const { inView } = this.state;

		console.dir(this.card.current);

		return inView;
	}

	renderPrice() {
		const { onsale, saleprice, price } = this.props;

		if (!!onsale) {
			return (<Fragment>&euro; <span style='text-decoration: line-through;'>{woocommerce.price_europe_separators(price)}</span> {woocommerce.price_europe_separators(saleprice)}</Fragment>);
		}

		return <span>&euro; {woocommerce.price_europe_separators(price)}</span>
	}

	renderPreOrderBanner() {
		if (!this.cardIsInView()) {
			return;
		}

		if (this.props.stock_status === 'preorder') {
			return <AnimatedPreOrderBanner />
		}
	}

	componentDidMount() {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					let el = entry.target;

					if (entry.intersectionRatio >= .75) {
						this.setState({
							inView: true,
						});
					}
				}
			})
		});

		try {
			observer.observe(this.card.current);
		} catch(e) {
			console.dir(e);
		}
	}

	render() {
		return (
			<Fragment>
				{this.props.onsale && <AnimatedSaleBanner />}
				{this.renderPreOrderBanner()}
				<a href={this.props.link} title={`Bekijk ${this.props.title}`}>
					<picture ref={this.card}>
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
	stock_status: PropTypes.oneOf(['instock', 'outofstock', 'preorder', 'onbackorder']),

	id: PropTypes.number,

}
