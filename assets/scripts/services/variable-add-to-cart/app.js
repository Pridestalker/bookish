import React, { Component, h, render } from 'preact';
import ky from 'ky';
import { SubmitButton } from '../simple-add-to-cart/Components/SubmitButton'
import { VariableSelect } from './Components/VariableSelect'
import getWindowAttributes from '../../src/Woocommerce/Single/helpers/getWindowAttributes'

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
		this.attributes = getWindowAttributes();
	}

	addToCart(e) {
		e.preventDefault();
		if (!this.state.variationID) {
			// Send toast notification?
			// Only if no variation selected
		}

		window.alert(this.state.variationID);
	}

	changeVariation(e) {
		// Show a notification of selection?
		const { value, dataset } = e.target;
		const { attribute_name } = dataset;

		const possibilities = this.attributes
			.filter(attribute => attribute.attributes.hasOwnProperty(attribute_name))
			.filter(attribute => attribute.attributes[attribute_name] === ''? true: attribute.attributes[attribute_name] === value)

		if (possibilities.length === 1) {
			this.setState({
				variationID: possibilities[0].id,
				loading: false,
			})
		} else {
			this.setState({
				variationID: false,
				loading: false,
			})
		}

		console.log(possibilities)
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
					options={this.variations[key]} key={key} changeHandler={this.changeVariation} selectName={key} />)
			}
		}

		return (
			<form onSubmit={this.addToCart}>
				<input
					type='number'
					name='quantity'
					value={this.state.quantity}
					className={'w-64'}
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
