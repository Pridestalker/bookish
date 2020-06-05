import { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusHexagon, faSpinner } from '@fortawesome/pro-duotone-svg-icons'

export class SubmitButton extends Component {
	render() {
		return (
			<button type='submit' name='add-to-cart' value={this.props.productID} className='product-add-to-cart' >
				<FontAwesomeIcon icon={this.props.loading? faSpinner: faPlusHexagon} spin={this.propss.loading}/>
				<span>
					Toevoegen aan winkelmand
				</span>
			</button>
		)
	}
}
