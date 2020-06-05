import { Component, h } from 'preact';

export class SubmitButton extends Component {
	render() {
		return (
			<button type='submit' name='add-to-cart' value={this.state.productID} className='product-add-to-cart' >
				<i className='fad fa-plus-hexagon' />
				<span>
					Toevoegen aan winkelmand
				</span>
			</button>
		)
	}
}
