import React, { Component, h, render } from 'preact'
import ky from 'ky';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons';
import { FillWrapper } from './Components/FillWrapper'
import { Colors } from '../../config';

const searchBar = document.querySelector('#search-form');

export class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.abortControllers = [];

		this.searchHandler = this.searchHandler.bind(this);
		this.hideAutoFill = this.hideAutoFill.bind(this);
		this.showAutoFill = this.showAutoFill.bind(this);

		this.state = {
			loading: false,
			searchValue: null,
			searchResults: [],
			count: 0,
			isVisible: false,
		}
	}

	/**
	 *
	 * @param e
	 */
	searchHandler(e)
	{
		this.abortControllers.forEach(abortController => abortController.abort());
		const abortController = new AbortController();
		this.abortControllers.push(abortController);

		this.setState({
			searchValue: e.target.value,
			loading: true,
		});

		ky.get(window['ajax_url'], {
			signal: abortController.signal,
			searchParams: {
				action: 'search_results',
				s: this.state.searchValue,
			}
		})
			.then(res => res.json())
			.then(res => {
				const { count, posts } = res.data;
				this.setState({
					searchResults: posts,
					count: count
				});
			})
			.catch((e) => {
				this.setState( {
					searchResults: [],
					count: 0,
				})
			})
			.finally(() => this.setState({
				loading: false,
			}))
	}

	hideAutoFill() {
		this.setState({
			isVisible: false,
		})
	}

	showAutoFill() {
		this.setState({
			isVisible: true,
		})
	}

	render() {
		return (
			<form className={'search-form'} action={'/'} method={'GET'}>
				<input type="hidden" name="post_type" value='product' id='post_type'/>
				<label htmlFor={'autoComplete'} className={'sr-only'}>Zoeken naar...</label>
				<input type="text"
					   placeholder='Waar ben je naar op zoek?'
					   id={'autoComplete'}
					   name={'s'}
					   onChange={this.searchHandler}
					   value={this.state.searchValue}
					   autoComplete={'off'}
					   onFocus={this.showAutoFill}
					   onBlur={this.hideAutoFill} />
				<button className={'btn search-icon'} type={'submit'} name={'Zoeken'} disabled={this.state.loading}>
					<FontAwesomeIcon icon={this.state.loading? faSpinnerThird : faSearch}
									 color={Colors.primary} spin={this.state.loading} />
				</button>
				{(this.state.isVisible && this.state.searchValue !== '') && <FillWrapper posts={this.state.searchResults} />}
			</form>
		)
	}
}

export function renderSearchBar() {
	if (!searchBar) {
		return;
	}
	render(<SearchBar />, searchBar);
}

