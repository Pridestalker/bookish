import React, { Component, render, h } from 'preact';
import { Toast } from './Toast'

export class ToastWrapper extends Component {
	constructor() {
		super();

		this.toastList = [];

		this.findToasts = this.findToasts.bind(this);
		this.createNewToast = this.createNewToast.bind(this);

		this.findToasts();
	}

	findToasts() {
		document.addEventListener('register-toast', evt => {
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
		this.toastList.push(<Toast
			title={title}
			content={content}
			color={color}
			time={time}
			actionText={actionText}
			action={action}
		/>)
	}

	render() {
		return (
			<aside>
				{this.toastList}
			</aside>
		)
	}
}

const toastContainer = document.querySelector('#toast-container');

if (toastContainer) {
	render(<ToastWrapper />, toastContainer);
}
