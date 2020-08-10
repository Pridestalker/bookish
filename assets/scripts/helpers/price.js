/**
 *
 * @param {string|number} price
 * @returns {string}
 */
export function price_europe_separators(price) {
	return price.toString().replace('.', ',')
}
