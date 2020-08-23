import React, { Component, h } from 'preact';

export class Price extends Component {
	render() {
		return <span style={{
			color: 'red',
		}}>{this.props.children}</span>
	}
}
