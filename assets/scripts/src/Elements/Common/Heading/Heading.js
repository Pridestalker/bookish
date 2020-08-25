import { LitElement, html } from 'lit-element';

export class Heading extends LitElement {
	static get properties() {
		return {
			type: { type: Number },
			size: { type: String }
		}
	}

	render() {
		return html`<h><slot /></h>`
	}
}
