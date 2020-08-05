import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  
  render() {
    return(
      <div className="u-border u-roundedMedium u-paddingSmall u-marginBottomSmall">
        <form className="" onSubmit={this.onFormSubmit}>
          <div className="FormGroup u-block">
            <label className="FormLabel u-block u-marginBottomTiny u-text300">Image search</label>
            <input type="text" placeholder="Keyword..." className="FormInput u-block u-widthFull"
              value={this.state.term} 
              onChange={e => {this.setState({term: e.target.value})}}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;