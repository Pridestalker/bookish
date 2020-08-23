import React, { Component, h } from 'preact';

export class Price extends Component {
	render() {
		return <span>{this.props.children}</span>
	}
}
