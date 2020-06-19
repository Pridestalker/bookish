import React, { render, h } from 'preact';
import { Product } from './Product';

const targetElements = document.querySelectorAll('.pre-product-card');

export function renderProducts() {
	if (targetElements.length === 0) {
		return;
	}

	for ( let i = 0; i < targetElements[i]; i++ ) {
		const { dataset } = targetElements[i];

		render(<Product
			thumbnail={dataset.thumbnail}
			title={dataset.title}
			categories={dataset.categories}
			price={dataset.price}
			id={dataset.product_id}
		/>, targetElements[i]);
	}
}