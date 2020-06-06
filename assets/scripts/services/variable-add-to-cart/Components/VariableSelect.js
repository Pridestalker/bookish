import React, { Component, h, Fragment } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-solid-svg-icons';

/**
 *
 * @param {string} name
 * @returns {string}
 */
const fixSelectLabel = (name) => name.replace('pa_', '').replace('-', ' ');

export class VariableSelect extends Component {
	render() {
		return (
			<Fragment>
				<label htmlFor={this.props.selectName}>
					{fixSelectLabel(this.props.selectName)}
				</label>

				<div className={'inline-block relative w-64'}>

					<select onChange={this.props.changeHandler}
							id={this.props.selectName}
							name={this.props.selectName}
							className={"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"}
					>
						{ this.props.options.map((option, key) =>
							<option value={option.toLowerCase()} key={key}>{option}</option>) }
					</select>
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
						<FontAwesomeIcon icon={faChevronDown} />
					</div>
				</div>
			</Fragment>
		)
	}
}
