import { LitElement, html } from 'lit-element'

export class GalleryGroup extends LitElement {
	static get properties() {
		return {
			selected: {
				type: String
			}
		}
	}

	get _slottedChildren() {
		const slot = this.shadowRoot.querySelector('gallery-item');
		const childNodes = slot.assignedNodes({flatten: true});
		return Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);	}

	render() {
		console.dir(this._slottedChildren);

		return html`<slot />`;
	}
}
