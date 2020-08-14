import React, { Component, h, Fragment, createRef } from 'preact';
import PropTypes from 'prop-types';
import { AnimatedSaleBanner, AnimatedSoldOut, AnimatedPreOrderBanner } from './components';
import { woocommerce } from '../../helpers';

export class Product extends Component {
	card = createRef();
	/**
	 *
	 * @type {IntersectionObserver} io
	 */
	io = null;
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(this.props.thumbnail);

		this.state = {
			inView: false,
		}

		this.renderPrice = this.renderPrice.bind(this);
		this.renderPreOrderBanner = this.renderPreOrderBanner.bind(this);
	}

	renderPrice() {
		const { onsale, saleprice, price } = this.props;

		if (!!onsale) {
			return (<Fragment>&euro; <span style='text-decoration: line-through;'>{woocommerce.price_europe_separators(price)}</span> {woocommerce.price_europe_separators(saleprice)}</Fragment>);
		}

		return <span>&euro; {woocommerce.price_europe_separators(price)}</span>
	}

	renderPreOrderBanner() {
		if (!this.state.inView) {
			return '';
		}

		if (this.props.stock_status === 'preorder') {
			return <AnimatedPreOrderBanner />
		}
	}

	componentDidMount() {
		this.io = new IntersectionObserver(([entry]) => {
			console.log(entry.target);
			this.setState({
				inView: entry.isIntersecting,
			});
		}, {
			root: null,
			rootMargin: '0px',
			threshold: 1.0
		});

		try {
			this.io.observe(this.card.current);
		} catch {}
	}

	componentWillUnmount() {
		this.io.disconnect();
	}

	render() {
		console.dir(this.state.inView);
		return (
			<Fragment>
				{this.props.onsale && <AnimatedSaleBanner />}
				{this.renderPreOrderBanner()}
				<a href={this.props.link} title={`Bekijk ${this.props.title}`}>
					<picture>
						<source srcSet={this.thumbnail.webp} type={'image/webp'} />
						<img src={this.thumbnail.thumbnail} loading={'lazy'} alt={`Productafbeelding ${this.props.title}`} />
					</picture>
				</a>
				<main className="card-content">
					<a href={this.props.link}>
						<h2 className="is-h3"  ref={this.card}>{this.props.title}</h2>
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
