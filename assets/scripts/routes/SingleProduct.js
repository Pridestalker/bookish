import { GalleryGroup, GalleryItem } from '../src/Elements/Product-old/gallery';
import { GalleryGroup as BookishGallery } from '../src/Elements/Product/Gallery/gallery-group';
import { TabGroup, TabItem } from '../src/Elements/Product/tabs';
import { define } from 'hybrids';
import { renderVariableAddToCart, renderSimpleAddToCart } from '../services/add-to-cart';

export default {
	init() {
		define('gallery-group', GalleryGroup);
		define('gallery-item', GalleryItem);
		define('tab-group', TabGroup);
		define('tab-item', TabItem);
		customElements.define('bookish-gallery', BookishGallery);
	},

	finalize() {
		renderVariableAddToCart();
		renderSimpleAddToCart();
	},
};
