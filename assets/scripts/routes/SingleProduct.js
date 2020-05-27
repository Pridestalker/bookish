import { GalleryGroup, GalleryItem } from '../src/Elements/Product/gallery';
import { TabGroup, TabItem } from '../src/Elements/Product/tabs';
import { define } from 'hybrids';
import variableProduct from '../src/Woocommerce/Single/variableProduct'

export default {
	init() {
		// Javascript that fires on all pages.
		define('gallery-group', GalleryGroup);
		define('gallery-item', GalleryItem);
		define('tab-group', TabGroup);
		define('tab-item', TabItem);
	},

	finalize() {
		variableProduct();
	},
};
