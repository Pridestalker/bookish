import { Component, h, render } from 'preact';
import ky from 'ky';

const formElement = document.querySelector('#add-variable-product-to-cart');

class AddToCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productID: window['product_id'],
			quantity: 1,
			minQuantity: window['product_settings'].qty.min,
			maxQuantity: window['product_settings'].qty.max,
			loading: false,
		}

		console.dir(acceptedAttributes);
		console.dir(variations);
	}


	render() {
		return (
			<form onSubmit={event => event.preventDefault()}>
			</form>
		)
	}
}

if (formElement) {
	render(<AddToCart />, formElement);
}
