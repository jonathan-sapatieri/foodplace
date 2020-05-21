import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {

    super(props);
    
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(e) {
    this.setState({term: e.target.value});
  }

  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }

  handleSearch(e) {
    if(this.state.term && this.state.location) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      e.preventDefault();
    } else {
      alert('Please fill in the fields!');
    };
  }

  getSortByClass(sortByOption) {
    if(sortByOption === this.state.sortBy) {
      return 'active';
    } else {
      return '';
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li 
          key={sortByOptionValue} 
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>            
          {sortByOption}
        </li>)
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input 
            placeholder="What?" 
            onChange={this.handleTermChange}
            required/>
          <input 
            placeholder="Where?" 
            onChange={this.handleLocationChange}
            required/>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>
      </div>
    );
  }
};

export default SearchBar;