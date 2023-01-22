import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;// movies = []  - значение по умолчанию

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => (
                    <Movie
                        key={movie.imdbID}
                        {...movie}
                    />
                ))
            ) : (
                <h4>Movies not found</h4>
            )}
            {/*...movie - так мы передали весь объект сразу, а не паримся с каждым параметром*/}
        </div>
    );
}

export { Movies };
