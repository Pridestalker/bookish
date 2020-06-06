import { Component, h } from 'preact'

export class VariableSelect extends Component {
	render() {
		return (
			<select onChange={this.props.changeHandler}>
				{ this.props.options.map((option, key) =>
					<option value={option.toLowerCase()} key={key}>{option}</option>) }
			</select>
		)
	}
}
