import { fireEvent, listenEvent } from '@elderbraum/simple-event-bus'
import { events } from '../../config/events'

export function openMiniMenu() {
	const navTarget = document.querySelector('.nav-wrapper'),
		hamburger = document.querySelector('.js-nav-opener');

	if (!navTarget || !hamburger) {
		return;
	}

	hamburger.addEventListener('click', e => {
		fireEvent(events.MENU.BUTTON_CLICKED);
		if (navTarget.classList.contains('active')) {
			navTarget.classList.remove('active');
			fireEvent(events.MENU.CLOSED)
		} else {
			navTarget.classList.add('active');
			fireEvent(events.MENU.OPENED);
		}
	});
}

export default class navigation {
	navTarget = '.nav-wrapper';
	hamburger = '.js-nav-opener';

	constructor() {
		this.run();
	}

	run() {
		const button = document.querySelector(this.hamburger);
		const nav = document.querySelector(this.navTarget);

		if (!button || !nav) {
			return;
		}

		button.addEventListener('click', () => nav.classList.toggle('active'));
	}
}

export function addSubMenuListeners() {
	const buttons = document.querySelectorAll('.js-submenu-opener');

	if (!buttons) {
		return;
	}

	buttons.forEach((element) => {
		element.addEventListener('click', (e) => {
			e.preventDefault();

			element
				.closest('.submenu-group')
				.querySelector('.submenu')
				.classList.toggle('active')
		})
	});
}
