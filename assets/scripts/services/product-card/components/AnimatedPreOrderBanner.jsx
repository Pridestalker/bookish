import React, { Component, h } from 'preact';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { Colors } from '../../../config';

const PreOrderBanner = styled.span`
	position: absolute;
	top: 0;
	left: .5rem;
	
	background: ${Colors.green};
	color: ${Colors.white};
	
	padding: 1rem .5rem;
	width: min-content;
	height: 11ch;
	
	text-transform: uppercase;
	text-align: center;
	pointer-events: none;

	clip-path: polygon(0 0, 0 100%, 50% 7ch, 100% 100%, 100% 0);
	
	&::before {
		content: ' ';
	}
`;

export class AnimatedPreOrderBanner extends Component {
	render() {
		return (
			<PreOrderBanner>
				Pre Order
			</PreOrderBanner>
		)
	}
}
