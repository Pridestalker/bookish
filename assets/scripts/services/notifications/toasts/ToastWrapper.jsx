import React, { Component, render, h } from 'preact';
import styled from 'styled-components';

import { Toast } from './Toast';

const ToastWrapper = styled.aside`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
pointer-events: none;
`

export class ToastWrapper extends Component {
	constructor() {
		super();

		this.state = {
			toastList: []
		}

		this.findToasts = this.findToasts.bind(this);
		this.createNewToast = this.createNewToast.bind(this);

		this.findToasts();
	}

	findToasts() {
		document.body.addEventListener('register-toast', evt => {
			const {
				title,
				time,
				content,
				color,
				actionText,
				action
			} = evt.detail;

			this.createNewToast(title, content, color, time, actionText, action);
		})
	}

	createNewToast(title, content, color = 'primary', time = 5000, actionText = 'Close', action = function () {}) {
		const { toastList } = this.state;
		toastList.push(<Toast
			title={title}
			content={content}
			color={color}
			time={time}
			actionText={actionText}
			action={action}
		/>);

		console.dir('Toast added ' + title);

		this.setState({toastList});
	}

	render() {
		return (
			<ToastWrapper>
				{(this.state.toastList || []).map(item => item)}
			</ToastWrapper>
		)
	}
}

const toastContainer = document.querySelector('#toast-container');

if (toastContainer) {
	render(<ToastWrapper />, toastContainer);
}
