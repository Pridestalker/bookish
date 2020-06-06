import { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';

export class VariableSelect extends Component {
	render() {
		return (
			<div className={'inline-block relative w-64'}>
				<select onChange={this.props.changeHandler}
						id={this.props.key}
						name={this.props.key}
						className={"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}
				>
					{ this.props.options.map((option, key) =>
						<option value={option.toLowerCase()} key={key}>{option}</option>) }
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<FontAwesomeIcon icon={faChevronDown} />
				</div>
			</div>
		)
	}
}
