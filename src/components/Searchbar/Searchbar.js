import s from './Searchbar.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };
  static propTypes = {
    onSubmitClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
  };
  handleSubjectChange = event => {
    this.setState({
      searchQuery: event.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Enter what you want to find ', {
        position: 'top-right',
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
    this.props.onSubmitClick(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    const { children, onSubmitClick, ...allyProps } = this.props;
    return (
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <input
            className={s.SearchFormInput}
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleSubjectChange}
            placeholder="Search images and photos"
          />
          <button className={s.SearchFormButton} type="submit" {...allyProps}>
            {children}
          </button>
        </form>
      </div>
    );
  }
}