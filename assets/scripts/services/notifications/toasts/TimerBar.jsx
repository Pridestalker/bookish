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
	constructor(props) {
		super(props);

		this.state = {
			time: props.time || false,
			width: 0,
		}

		this.increaseWidth = this.increaseWidth.bind(this);
	}

	increaseWidth(width) {
		this.setState({
			width: this.state.width += width
		});
	}

	render() {
		if (!this.state.time) {
			return <Fragment />
		}

		const widthErVal = setInterval(() => this.increaseWidth(50/this.state.time), (100/this.state.time));
		if (this.state.width >= 100) {
			clearInterval(widthErVal);
		}

		return (
			<ProgressBar width={this.state.width} />
		);
	}
}
