import { Checkout } from '../src/Woocommerce/';

export default {
	init() {

	},
	finalize() {
		Checkout.checkForDifferentShipping();
		Checkout.openLoginForm();
	},
};
