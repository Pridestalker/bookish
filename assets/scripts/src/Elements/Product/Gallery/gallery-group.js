import { html, LitElement, css } from 'lit-element'

export class GalleryGroup extends LitElement {
	static get properties() {
		return {
			selected: {
				type: String
			}
		}
	}

	static get styles() {
		return css`
.selected-gallery-item {
	max-height: 450px;
	width: 100%;
	transition: all 2254ms ease-in-out;
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
    flex: 0 0 105px;
    height: 105px;
    cursor: pointer;
    margin: 0 .5rem 0 0;
    border-radius: 14px;
    scroll-snap-align: start;
}

nav {
    display: flex;
	scroll-snap-type: x mandatory;
	overflow: scroll;
	overflow-y: hidden;
	padding-left: 1rem;
	padding-right: 1rem;
}

button.active {
    border: 1px solid hsl(265, 83%, 45%);
}

button > img {
    border-radius: 14px;
}

@media screen and (min-width: 768px) {
	.selected-gallery-item {
		width: auto;
	}

	nav {
		overflow: unset;
		scroll-snap-type: unset;
		padding-left: 0;
		padding-right: 0;
	}
}
`
	}

	get _slottedChildren() {
		return this.querySelectorAll( 'bookish-gallery-item' );
	}

	get selectedChild() {
		return Array.prototype.filter.call(this.slottedChildren, (child) => child.name === this.selected)?.[0] || ``;
	}

	constructor() {
		super();

		this.slottedChildren = this._slottedChildren;
	}

	render() {
		const selected = this.selectedChild;
		const children = Array.from(this.slottedChildren);
		return html`
<section>
	<picture>
		${(selected.modern_src && selected.modern_src !== '') && html`
			<source srcset="${selected.modern_src}" type="image/webp">
		`}	
		<img src="${selected.src}" alt="${selected.alt}" class="selected-gallery-item" />
	</picture>

	<nav>
		${children.map(child => html`
			<button class="${this.selected === child.name? 'active' : ''}" @click="${() => this.selected = child.name}">
			${child}
			</button>
		`)}	
	</nav>
</section>
`;
	}
}
