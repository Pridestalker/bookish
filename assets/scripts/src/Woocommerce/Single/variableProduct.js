import Variable from './helpers/Variable';
import getWindowAttributes from './helpers/getWindowAttributes'

export default () => {
	const form = document.querySelector('.js-add-to-cart'),
		/**
		 * @type {NodeListOf<HTMLSelectElement>}
		 */
		selects = document.querySelectorAll('.js-add-to-cart select[data-attribute_name]');

	if (selects.length === 0 || !form) {
		return;
	}

	const attributes = getWindowAttributes();
	/**
	 */
	const elements = { form: null, selects: selects };

	/**
	 * Shitload of loops. Mb reduce this?
	 */
	for ( let i = 0; i < elements.selects.length; i++ ) {
		/**
		 * @type {HTMLSelectElement} select
		 */
		const select = selects[i];
		for ( let option of select.options ) {
			if (!Variable.isValidOption(option, select, attributes)) {
				option.disabled = true;
			}
		}

		select.addEventListener('change', e => Variable.selectEvent(e, attributes));
	}
}
