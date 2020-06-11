import React, { Component, h } from 'preact'
import styled from 'styled-components';

const Input = styled.input`
	margin-bottom: 0;
`;

const Button = styled.button`
	line-height: 0;
	padding: 0 1rem;
	border: 1px solid #ebebeb;
	
	${props => props.left && 'border-top-left-radius: 4px; border-bottom-right-radius: 4px;'}
`;

export class QuantityInput extends Component {
	render() {
		return (
			<div style={{ 'display': 'flex', }}>
				<Button type={'button'} onClick={this.props.reduceHandler}>
					-
				</Button>
				<Input
					type={'number'}
					name={'quantity'}
					value={this.props.quantity}
					onChange={event => this.props.changeHandler(event.target.value)} />
				<Button type={'button'} onClick={this.props.increaseHandler}>
					+
				</Button>
			</div>
		)
	}
}
