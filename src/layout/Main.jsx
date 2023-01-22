import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_kEY=process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        loading: true,
    };

    searchMovies = (title, type = "all") => {
        //type = 'all' - задаем значение по умолчанию
        this.setState({ loading: true });

        fetch(
            `http://www.omdbapi.com/?apikey=${API_kEY}&s=${title}${
                type === "all" ? "" : `&type=${type}`
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_kEY}&s=matrix`)//ключ данный на omdbapi хранится в файле .env.local для безопасности. Как правильно хранить/выкладывать в ропозиториях ключи см. в уроке.
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })//data.Search - это ключ в ответном JSON с сайта
            );
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />

                {loading ? (
                    <Preloader />
                ) :(
                    <Movies movies={movies} />
                )}
            </main>
        );
    }
}

export { Main };
