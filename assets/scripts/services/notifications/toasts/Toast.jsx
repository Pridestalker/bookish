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
padding: .5rem;
border-radius: 14px;
`;

const MainToastElement = styled.main`
	flex: 1 0 60%;
`

export class Toast extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ToastElement>
				<MainToastElement>
					{this.props.content}
				</MainToastElement>
				<button>
					{this.props.actionText}
				</button>
			</ToastElement>
		)
	}
}
