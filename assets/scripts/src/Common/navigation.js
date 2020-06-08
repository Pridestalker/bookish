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
