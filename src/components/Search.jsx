import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all", //movie, series
    };

    handleReloadMovies = () => {
        this.props.searchMovies(this.state.search, this.state.type);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Клавиша Enter
            this.handleReloadMovies();
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.handleReloadMovies();
            }
        );
    };

    render() {
        return (
            <div className='input-field'>
                <input
                    className='validate'
                    placeholder='search'
                    type='search'
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyUp={this.handleKeyPress}
                />
                <a
                    className='search-btn waves-effect waves-light btn'
                    onClick={this.handleReloadMovies}
                >
                    Search
                </a>
                <p>
                    <label className='search-type-rb'>
                        <input
                            checked={this.state.type === "all"}
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={this.handleFilter}
                        />
                        <span>All</span>
                    </label>
                    <label className='search-type-rb'>
                        <input
                            checked={this.state.type === "movie"}
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                        />
                        <span>Movies</span>
                    </label>
                    <label className='search-type-rb'>
                        <input
                            checked={this.state.type === "series"}
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                        />
                        <span>Serials</span>
                    </label>
                </p>
            </div>
        );
    }
}

export { Search };
