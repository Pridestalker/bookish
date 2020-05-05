import {
	children,
	dispatch,
	html,
} from 'hybrids';
import style from './style';
import GalleryItem from './gallery-item';

function activate(name) {
	return (host) => {
		host.activeItem = name;

		dispatch(host, 'gallery-switch');
	};
}

export default {
	items: children(GalleryItem),
	activeItem: {
		set: ({items}, name) => items
			.filter(item => item.active = item.name === name)
			.map(({name}) => name)[0],
		get: ({items}) => items.filter(item => item.active)[0]
	},
	render: ({ items, activeItem }) => html`
	${style}
<figure>
	<img src="${activeItem.src}" alt="${activeItem.alt}" class="featured-image" />
</figure>
<nav>
  ${items.map( ( { src, alt, active, name } ) =>
		html`
<button class="${{ active }}" onclick="${activate( name )}" >
	<img src="${src}" alt="${alt}" class="button-image">
</button>
	`.key( name )
	)}
</nav>
	`
};
