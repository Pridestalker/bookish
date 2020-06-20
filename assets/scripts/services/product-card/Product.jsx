import React, { Component, h, Fragment } from 'preact';

export class Product extends Component {
	constructor(props) {
		super(props);

		this.thumbnail = JSON.parse(this.props.thumbnail);
	}

	render() {
		return (
			<Fragment>
				<a href={this.props.link}>
					<picture>
						<source srcSet={this.thumbnail.webp} type={'image/webp'} />
						<img src={this.thumbnail.thumbnail} loading={'lazy'} />
					</picture>
				</a>
				<main className="card-content">
					<a href={this.props.link}>
						<h2 className="is-h3">{this.props.title}</h2>
					</a>
					<p className="product-card--categories mb-2" dangerouslySetInnerHTML={{__html: this.props.categories}} />
					<p className="product-card--price" dangerouslySetInnerHTML={{__html:this.props.price}} />
				</main>
			</Fragment>
		)
	}
}
