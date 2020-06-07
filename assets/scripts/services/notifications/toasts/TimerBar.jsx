import React, { Component, h, Fragment } from 'preact';
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
			time: 5000,
			width: 0,
		}
	}

	render() {
		if (!this.state.time) {
			return <Fragment />
		}
		return (
			<ProgressBar width={this.state.width} />
		);
	}
}
