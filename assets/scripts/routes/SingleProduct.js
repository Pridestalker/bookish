import { Gallery, Tabs } from '../src/Elements/Product';
import { TabGroup, TabItem } from '../src/Elements/Product-old/tabs';
import { define } from 'hybrids';
import { renderVariableAddToCart, renderSimpleAddToCart } from '../services/add-to-cart';

export default {
	init() {
		define('tab-group', TabGroup);
		define('tab-item', TabItem);
		customElements.define('bookish-gallery', Gallery.GalleryGroup);
		customElements.define('bookish-gallery-item', Gallery.GalleryItem);
		customElements.define('bookish-tabs', Tabs.TabGroup);
		customElements.define('bookish-tab', Tabs.TabItem);
	},

	finalize() {
		renderVariableAddToCart();
		renderSimpleAddToCart();
	},
};
