import React, { Component, h} from 'preact'
import styled from 'styled-components';
import { Colors } from '../../../config';

const ToastElement = styled.section`
pointer-events: all;
position: absolute;
right: 1rem;
overflow: hidden;
box-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);
background: ${Colors.primary};
color: ${Colors.white};
display: flex;
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
			<section className={'toast'}>
				<MainToastElement>
					{this.props.content}
				</MainToastElement>
				<!-- Hier komt dan buttonp. -->
			</section>
		)
	}
}
