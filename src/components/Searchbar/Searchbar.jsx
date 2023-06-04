import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import {
  SearchbarWrp,
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './Searchdar.styled.jsx';

class Searchdar extends Component {
  state = {
    searchName: '', // значення введеного пошукового запиту
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.searchName.value.trim(); // отримання пошукового запиту видалення пробілів
    this.props.onSubmit(searchQuery); // передача запиту батьківському компоненту
    event.currentTarget.reset(); //збирання значення в полі введення
  };

  render() {
    return (
      <SearchbarWrp>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FcSearch width={90} height={90} />
            <SearchSpan>Search</SearchSpan>
          </SearchButton>
          <SearchInput
            name="searchName"
            type="text"
            // autocomplete="off"
            id="search"
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarWrp>
    );
  }
}

Searchdar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchdar;
