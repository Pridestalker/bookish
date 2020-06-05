import { Component, render, h, Fragment } from 'preact'


export class BulbCounter extends Component {
	constructor(props) {
		super(props);

		document.addEventListener('product-added-to-cart', (e) => this.props.dataRefresh);
	}

	render() {
		if (this.props.cartCount === 0) {
			return <Fragment />;
		}


		return (
			<span className="bulb">
				{ this.props.cartCount }
			</span>
		)
	}
}
