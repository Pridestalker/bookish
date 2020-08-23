import { GalleryGroup, GalleryItem } from '../src/Elements/Product/gallery';
import { TabGroup, TabItem } from '../src/Elements/Product/tabs';
import { define } from 'hybrids';
import { renderVariableAddToCart, renderSimpleAddToCart } from '../services/add-to-cart';
import { renderStyledPrice } from '../services/product'

export default {
	init() {
		// Javascript that fires on all pages.
		define('gallery-group', GalleryGroup);
		define('gallery-item', GalleryItem);
		define('tab-group', TabGroup);
		define('tab-item', TabItem);
	},

	finalize() {
		renderVariableAddToCart();
		renderSimpleAddToCart();
		renderStyledPrice();
	},
};
