import React, { Component, h, Fragment } from 'preact';
import styled from 'styled-components';

const ProgressBar = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: ${props => (props.width || 0) + '%'};
transition: width 225ms ease;
height: 3px;
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(2px);
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

		console.dir(this.props.time || 300)
		return (
			<ProgressBar width={this.state.width} />
		);
	}
}
