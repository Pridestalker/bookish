import preact, { Component, render } from 'preact'

class MiniCart extends Component {
	render() {
		return (
			<div>

			</div>);
	}
}

const cartElement = document.querySelector('#mini-cart-app');

if (cartElement) {
	render(MiniCart, cartElement);
}
