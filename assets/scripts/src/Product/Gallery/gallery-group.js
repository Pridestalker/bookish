import {
	children,
	dispatch,
	html
} from 'hybrids';
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
<style>
	nav {
		display: flex;
		
	}
	button {
		padding: 0;
		width: auto;
		overflow: visible;
	
		background: transparent;
	
		color: inherit;
		font: inherit;
	
		line-height: normal;
	
		/* Corrects font smoothing for webkit */
		-webkit-font-smoothing: inherit;
		-moz-osx-font-smoothing: inherit;
	
		-webkit-appearance: none;
		border: 0;
		flex: 0 1 105px;
		height: 105px;
		cursor: pointer;
		margin: 0 .5rem 0 0;
		border-radius: 14px;
	}
	
	button.active {
	 border: 1px solid hsl(265, 83%, 45%);
	}
	
	button > img {
		border-radius: 14px;
	}
	
	.featured-image {
		max-height: 450px;
		width: auto;
		transition: all 225ms ease-in-out;
	}
	
	.button-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>

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
