import { LitElement, html, css, customElement, property} from 'lit-element'

@customElement('bookish-gallery')
export class GalleryGroup extends LitElement {

	static get properties() {
		return {
			selected: {
				type: String
			}
		}
	}

	render() {
		return html`<slot />`;
	}
}
