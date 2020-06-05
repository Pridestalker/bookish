import { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusHexagon } from '@fortawesome/pro-duotone-svg-icons'

export class SubmitButton extends Component {
	render() {
		return (
			<button type='submit' name='add-to-cart' value={this.state.productID} className='product-add-to-cart' >
				<FontAwesomeIcon icon={faPlusHexagon} />
				<span>
					Toevoegen aan winkelmand
				</span>
			</button>
		)
	}
}
