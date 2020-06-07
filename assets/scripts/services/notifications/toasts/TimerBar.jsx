import React, { Component, h } from 'preact';
import styled from 'styled-components';

const ProgressBar = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: ${props => (props.width || 0) + '%'};
transition: width 225ms ease;
`

export class TimerBar extends Component {
	constructor() {
		super();

		this.state = {
			time: this.props.time,
			width: 0,
		}
	}

	render() {
		return (
			<ProgressBar width={this.state.width} />
		);
	}
}
