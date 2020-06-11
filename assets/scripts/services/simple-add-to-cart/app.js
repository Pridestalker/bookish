import React, { Component, h, render } from 'preact';
import ky from 'ky';
import { SubmitButton } from './Components/SubmitButton'
import { registerToast } from '../notifications'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/pro-solid-svg-icons';
import { QuantityInput } from './Components/QuantityInput'

const formElement = document.querySelector('#add-simple-product-to-cart');

class AddToCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productID: window['product_id'],
			quantity: 1,
			minQuantity: Number(window['product_settings'].qty.min),
			maxQuantity: Number(window['product_settings'].qty.max),
			loading: false
		};

		this.addToCart = this.addToCart.bind(this);
		this.editQuantity = this.editQuantity.bind(this);
		this.increaseHandler = this.increaseHandler.bind(this);
		this.reduceHandler = this.reduceHandler.bind(this);
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
			.finally(() => {
				registerToast({
					slug: `add_product_to_cart-${new Date().getTime()}`,
					content: `Product toegevoegd aan je winkelmandje!`,
					actionText: <FontAwesomeIcon icon={faTimes} />
				});
				this.setState({ loading: false });
			});
	}

	editQuantity(newQuantity) {
		this.setState({
			quantity: newQuantity
		});
	}

	reduceHandler() {
		const { minQuantity } = this.state;
		if (this.state.quantity > minQuantity) {
			this.setState({
				quantity: this.state.quantity--
			});
		}
	}
	increaseHandler() {
		const { maxQuantity } = this.state;
		if (this.state.quantity < maxQuantity) {
			this.setState({
				quantity: this.state.quantity++
			});
		}
	}

	render() {
		return (
			<form onSubmit={this.addToCart}>
				<QuantityInput
					changeHandler={this.editQuantity}
					reduceHandler={this.reduceHandler}
					increaseHandler={this.increaseHandler}
					quantity={this.state.quantity}/>

				<SubmitButton productID={this.state.productID} loading={this.state.loading} />
			</form>
		);
	}
}

if (formElement) {
	render(<AddToCart />, formElement);
}
