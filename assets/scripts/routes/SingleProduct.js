import { GalleryGroup, GalleryItem } from '../src/Elements/Product/gallery';
import { TabGroup, TabItem } from '../src/Elements/Product/tabs';
import { define } from 'hybrids';
import VariableProductSelector from '../src/VariableProductSelector/VariableProductSelector';

export default {
	init() {
		// Javascript that fires on all pages.
		define('gallery-group', GalleryGroup);
		define('gallery-item', GalleryItem);
		define('tab-group', TabGroup);
		define('tab-item', TabItem);
	},

	finalize() {
		// Javascript that fires on all pages. after page specific JS is fires.
		new VariableProductSelector();
	},
};
