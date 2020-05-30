import { Component, render, h } from 'preact';

const formElement = document.querySelector('#add-product-to-cart');

class AddToCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productID: null,
			quantity: null,
			minQuantity: null,
			maxQuantity: null,
		}
	}

	componentWillMount() {
		this.setState({
			productID: window['product_id'],
			quantity: 1,
			minQuantity: window['product_settings'].qty.min,
			maxQuantity: window['product_settings'].qty.max
		})
	}

	render() {
		return (
			<form>
				<input
					type='number'
					name='quantity'
					value={this.state.quantity}
				/>

				<button type='submit' name='add-to-cart' value={this.state.productID} className='product-add-to-cart'>
					<i className='fad fa-plus-hexagon' />
					<span>Toevoegen aan winkelmand</span>
				</button>
			</form>
		)
	}
}

if (formElement) {
	render(<AddToCart />, formElement);
}
