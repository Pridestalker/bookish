import { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusHexagon, faSpinner } from '@fortawesome/pro-duotone-svg-icons'

export class SubmitButton extends Component {
	constructor(props) {
		super(props);

		this.renderButtons = this.renderButtons.bind(this);
	}

	renderButtons() {
		if (this.props.loading) {
			return <FontAwesomeIcon icon={faSpinner} />
		}

		return <FontAwesomeIcon icon={faPlusHexagon} />
	}

	render() {
		return (
			<button type='submit' name='add-to-cart' value={this.props.productID} className='product-add-to-cart' >
				{this.renderButtons()}
				<span>
					Toevoegen aan winkelmand
				</span>
			</button>
		)
	}
}
