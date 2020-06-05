import { Component, render, h } from 'preact'


export class BulbCounter extends Component {
	constructor(props) {
		super(props);

		document.addEventListener('product-added-to-cart', (e) => this.props.dataRefresh);
	}

	render() {
		if (this.props.cartCount === 0) {
			return <></>;
		}


		return (
			<span className="bulb">
				{ this.props.cartCount }
			</span>
		)
	}
}

