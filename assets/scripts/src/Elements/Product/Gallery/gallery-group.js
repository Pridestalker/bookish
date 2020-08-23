import { LitElement, html } from 'lit-element'

export class GalleryGroup extends LitElement {
	createRenderRoot() {
		return this;
	}

	static get properties() {
		return {
			selected: {
				type: String
			}
		}
	}

	get _slottedChildren() {
		const slot = this.querySelector('gallery-item');
		console.dir(slot);

		return [];
	}

	render() {
		console.dir(this._slottedChildren);

		return html`<slot />`;
	}
}
