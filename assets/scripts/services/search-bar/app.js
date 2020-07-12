import React, { h, render } from 'preact'
import { SearchBar } from './Components/Form';

export function renderSearchBar() {
	const searchBar = document.querySelectorAll('.pre-search-form');

	for ( let i = 0; i < searchBar.length; i++ ) {
		render(<SearchBar />, searchBar[i]);
	}
}

