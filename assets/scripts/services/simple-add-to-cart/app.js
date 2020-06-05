import { Component, h, render } from 'preact';
import ky from 'ky';
import { SubmitButton } from './Components/SubmitButton'

const formElement = document.querySelector('#add-simple-product-to-cart');

class AddToCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productID: window['product_id'],
			quantity: 1,
			minQuantity: window['product_settings'].qty.min,
			maxQuantity: window['product_settings'].qty.max,
			loading: true
		};

		this.addToCart = this.addToCart.bind(this);
		this.editQuantity = this.editQuantity.bind(this);
	}

	/**
	 *
	 * @param {Event} e
	 */
	addToCart(e) {
		e.preventDefault();

		this.setState({loading: true});
		ky.post(window['ajax_url'], {
			searchParams: {
				action: 'add_product_to_cart',
			},
			json:{
				action: 'add_product_to_cart',
				product_id: this.state.productID,
				qty: this.state.quantity,
			},
			credentials: 'same-origin'
		})
			.then(res => res.json())
			.then(res => document.body.dispatchEvent(new CustomEvent('product-added-to-cart', { detail: res?.data|| [] })))
			.finally(() => this.setState({loading:false}));
	}

	editQuantity(e) {
		this.setState({
			quantity: e.target.value
		});
	}

	render() {
		this.setState({ loading: false });
		return (
			<form onSubmit={this.addToCart}>
				<input
					type='number'
					name='quantity'
					value={this.state.quantity}
					onChange={this.editQuantity}
				/>

				<SubmitButton productID={this.state.productID} loading={} />
			</form>
		);
	}
}

if (formElement) {
	render(<AddToCart />, formElement);
}
