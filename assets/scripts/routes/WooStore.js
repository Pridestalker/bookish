export default {
	init() {
		refreshAfterOrder();
	},
	finalize() {},
};


const refreshAfterOrder = () => {
	const form = document.querySelector('.woocommerce-ordering'),
		select = form.querySelector('select');

	select.addEventListener('change', () => {
		form.submit();
	})
}
