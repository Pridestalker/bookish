import React, { Component, h } from 'preact';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import { Colors } from '../../../config';

const BannerWrapper = styled.div`
	position: absolute;
	top: 0;
	right: .5rem;
	
	&:before {
		content: ' ';
	}
	
	filter: drop-shadow(-1px 6px 3px rgba(51, 51, 51, 0.3))
`;

const PreOrderBanner = styled.span`
	background: ${Colors.green};
	color: ${Colors.white};
	
	padding: 1rem .5rem;
	width: min-content;
	height: 11ch;
	
	text-transform: uppercase;
	text-align: center;
	pointer-events: none;

	clip-path: polygon(0 0, 0 100%, 50% 7ch, 100% 100%, 100% 0);
`;

export class AnimatedPreOrderBanner extends Component {
	render() {
		return (
			<BannerWrapper>
				<PreOrderBanner>
					Pre Order
				</PreOrderBanner>
			</BannerWrapper>
		)
	}
}
