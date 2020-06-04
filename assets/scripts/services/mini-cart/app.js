import { Component, render, h } from 'preact';
import ky from 'ky';

class MiniCart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cart: [],
			cartCount: null,
		};
	}

	componentWillMount() {
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
			<a href={this.props.href}
			   className="text-primary js-shopping-cart-button shopping-cart-button p-2"
			>
				<span className="hidden lg:inline-block mr-2">winkelmandje</span>
				<span className="shopping-icon" key={`icon-${cartCount}`}>
					<i className="fad fa-shopping-bag" />
				</span>
				{
					cartCount > 0 &&
					<span className="bulb">
						{ cartCount }
					</span>
				}

			</a>);
	}
}

const cartElement = document.querySelector('#mini-cart-app');



if (cartElement) {
	render(<MiniCart href={window['shopping_cart_url']} />, cartElement);
}
