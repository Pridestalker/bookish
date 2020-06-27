import React, { Component, render, h } from 'preact';
import ky from 'ky';
import { BulbCounter } from './Components/BulbCounter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/pro-duotone-svg-icons';
import { LatestProducts } from './Components/LatestProducts'
import styled from 'styled-components';

const BarredBottom = styled.a`
position: relative;
&::before {
position: absolute;
content: ' ';
}
`

class MiniCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cart: [],
			cartCount: 0,
		};

		this.fetchData = this.fetchData.bind(this);

		document.body.addEventListener('product-added-to-cart', () => this.fetchData());
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData() {
		ky.get(window['ajax_url'], {
			searchParams: {
				action: 'get_cart_item_count'
			},
			credentials: 'same-origin'
		}).then(res => {
			if (!res.ok) {
				this.setState({
					cart: [],
					cartCount: 0
				});
			}
			return res.json();
		})
			.then(res => {
				this.setState({
					cart: res.data?.cart_items || [],
					cartCount: res.data?.cart_items_count || 0,
				});
			});
	}

	render() {
		const { cartCount } = this.state;
		return (
			<BarredBottom href={this.props.href}
			   className="text-primary js-shopping-cart-button shopping-cart-button p-2"
			>
				<span className="hidden lg:inline-block mr-2">winkelmandje</span>
				<FontAwesomeIcon icon={faShoppingCart} className={'shopping-icon'} />
				<BulbCounter cartCount={cartCount} />
				<LatestProducts />
			</BarredBottom>);
	}
}

export function renderMiniCart() {
	const cartElement = document.querySelector('#mini-cart-app');

	if (cartElement) {
		render(<MiniCart href={window['shopping_cart_url']} />, cartElement);
	}
}
