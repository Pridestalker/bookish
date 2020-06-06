import { Component, h } from 'preact'

export class VariableSelect extends Component {
	render() {
		return (
			<select onChange={this.props.changeHandler}
					id={this.props.key}
					name={this.props.key}
					className={"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}
			>
				{ this.props.options.map((option, key) =>
					<option value={option.toLowerCase()} key={key}>{option}</option>) }
			</select>
		)
	}
}
