import React, { Component, h} from 'preact'

export class Toast extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className={'toast'}>
				<header>{this.props.title}</header>
			</section>
		)
	}
}
