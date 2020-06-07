import React, { Component, h} from 'preact'
import styled from 'styled-components';
import { Colors } from '../../../config';

const ToastElement = styled.section`
pointer-events: all;
overflow: hidden;
box-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);
background: ${Colors.primary};
color: ${Colors.white};
display: flex;
margin: .5rem 0;
padding: .5rem 1rem;
border-radius: 4px;
width: 300px;
`;

const MainToastElement = styled.main`
	flex: 1 0 60%;
`

export class Toast extends Component {
	constructor(props) {
		super(props);

		this.closeMe = this.closeMe.bind(this);
	}


	closeMe() {

	}

	render() {
		return (
			<ToastElement>
				<MainToastElement>
					{this.props.content}
				</MainToastElement>
				<button onClick={e => this.props.action(this.props.slug)}>
					{this.props.actionText}
				</button>
			</ToastElement>
		)
	}
}
