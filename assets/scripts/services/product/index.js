import React, { render } from 'preact';
import { Price } from './components/Price';

export function renderStyledPrice() {
	const targets = document.querySelectorAll('.pre-product-price');

	if (targets.length === 0) {
		return;
	}

	targets.forEach(target => render(Price, target));
}
