import React, { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusHexagon, faSpinner } from '@fortawesome/pro-duotone-svg-icons'

export class SubmitButton extends Component {
	render() {
		return (
			<button type='submit' name='add-to-cart' value={this.props.productID} className='product-add-to-cart' disabled={this.props.loading} >
				<FontAwesomeIcon icon={this.props.loading? faSpinner: faPlusHexagon} spin={this.props.loading}/>
				<span style={{ 'margin-left': '.5rem' }}>
					{ this.props.loading?
						'Aan het toevoegen':
						'Toevoegen aan winkelmand'}
				</span>
			</button>
		)
	}
}
