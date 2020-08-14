import React, { render, h } from 'preact';
import { Product } from './Product';

export function renderProducts() {
	const targetElements = document.querySelectorAll('.pre-product-card');

	if (targetElements.length === 0) {
		return;
	}

	for ( let i = 0; i < targetElements.length; i++ ) {
		const { dataset } = targetElements[i];

		render(<Product
			thumbnail={dataset.thumbnail}
			title={dataset.title}
			categories={dataset.categories}
			price={dataset.price}
			id={dataset.product_id}
			link={dataset.url}
			instock={dataset.instock}
			onsale={dataset.onsale}
			saleprice={dataset.saleprice}
			stock_status={dataset.stock_status}
		/>, targetElements[i]);
	}
}
