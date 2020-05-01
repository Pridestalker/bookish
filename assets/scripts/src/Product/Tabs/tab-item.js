import { html } from 'hybrids';

export default {
	name: '',
	icon: '',
	active: false,
	render: ({ active }) => html`
		${active && html`<slot></slot>`}
	`,
};
