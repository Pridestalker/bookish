import React, { Component, h } from 'preact';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion'
import { Colors } from '../../../config'
import { HorizontalRibbon } from './Ribbon'

const SaleBanner = styled.span`
	position: absolute;
	text-transform: uppercase;
	
	background: ${Colors.green};
	color: ${Colors.white};
	padding: 1rem .5rem;
	border-radius: 50%;
	box-shadow: 0 3px 6px rgba(51, 51, 51, 0.2);
	top: .5rem;
	left: .5rem;
	pointer-events: none;
`;

export class AnimatedSaleBanner extends Component {
	render() {
		return (
			<Motion defaultStyle={{ s: 0 }} style={{ s: spring(1, { stiffness: 90, damping: 9}) }}>
				{({ s }) => (
					<HorizontalRibbon style={{
						transform: `scale(1, ${s})`,
						transformOrigin: 'top center',
					}}>
						Sale
					</HorizontalRibbon>
				)}
			</Motion>
		)
	}
}
