import { Component, h } from 'preact'

export class VariableSelect extends Component {
	render() {
		this.props.options.map(console.log)

		return (
			<select onChange={this.props.changeHandler}>
				{/*{ this.props.options.map((option, key) =>*/}
				{/*	<option value={option.lowercase()} key={key}>{option}</option>) }*/}
			</select>
		)
	}
}
