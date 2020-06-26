import React, { Component, h } from 'preact';
import styled from 'styled-components';

const ProductContainer = styled.div`
position: absolute;
&::before {
position: absolute;
content: ' ';
}
`;


export class LatestProducts extends Component {
	render() {
		return <ProductContainer />;
	}
}
