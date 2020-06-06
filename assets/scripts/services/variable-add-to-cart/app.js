import React, { Component, h, render } from 'preact';
import ky from 'ky';
import { SubmitButton } from '../simple-add-to-cart/Components/SubmitButton'
import { VariableSelect } from './Components/VariableSelect'

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
			variationID: false,
		}

		this.editQuantity = this.editQuantity.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.changeVariation = this.changeVariation.bind(this);
		this.variations = variations;

		console.dir(acceptedAttributes);
	}

	addToCart(e) {
		if (!this.state.variationID) {
			// Send toast notification?
			// Only if no variation selected
		}
	}

	changeVariation(e) {
		// Show a notification of selection?
		console.dir(e);
	}

	editQuantity(e) {
		this.setState({
			quantity: e.target.value
		})
	}

	render() {
		const selects = [];

		for ( const key in this.variations ) {
			if (this.variations.hasOwnProperty(key)) {
				selects.push(<VariableSelect
					options={this.variations[key]} key={key} changeHandler={this.changeVariation} />)
			}
		}

		return (
			<form onSubmit={event => event.preventDefault()}>
				<input
					type='number'
					name='quantity'
					value={this.state.quantity}
					onChange={this.editQuantity}
				/>

				{selects}

				<SubmitButton productID={this.state.productID} loading={this.state.loading} />
			</form>
		)
	}
}

if (formElement) {
	render(<AddToCart />, formElement);
}
