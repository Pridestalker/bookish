import '../src/Elements/Product/tabs';
import '../src/Elements/Product/gallery';
import VariableProductSelector from '../src/VariableProductSelector/VariableProductSelector'

export default {
	init() {
		// Javascript that fires on all pages.
	},

	finalize() {
		// Javascript that fires on all pages. after page specific JS is fires.
		new VariableProductSelector();
	},
};
