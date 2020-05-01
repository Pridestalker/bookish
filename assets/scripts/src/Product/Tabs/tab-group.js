import {
	children,
	dispatch,
	html
} from 'hybrids';
import TabItem from './tab-item';

function activate(name) {
	return (host) => {
		host.activeItem = name;

		dispatch(host, 'tab-switch');
	};
}

export default {
	items: children(TabItem),
	activeItem: {
		set: ({items}, name) => items
			.filter(item => item.active = item.name === name)
			.map(({name}) => name)[0],
	},
	render: ({ items }) => html`
    <nav>
      ${items.map(({ name, active }) =>
		html`
          <button class="${{ active }}" onclick="${activate(name)}">
            ${name}
          </button>
        `.key(name)
	)}
    </nav>
	
	<slot></slot>
	`,
};
