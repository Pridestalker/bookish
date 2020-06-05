import { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusHexagon, faSpinner } from '@fortawesome/pro-duotone-svg-icons'

export class SubmitButton extends Component {
	render() {
		const icon = this.props.loading? <FontAwesomeIcon icon={faSpinner} /> : <FontAwesomeIcon icon={faPlusHexagon} />
		return (
			<button type='submit' name='add-to-cart' value={this.props.productID} className='product-add-to-cart' >
				{icon}
				<span>
					Toevoegen aan winkelmand
				</span>
			</button>
		)
	}
}
